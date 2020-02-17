

let shortenBase = 'https://s.webot.shop/api/v1/shorten'
let nextLocationUrl = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=aa0e3bb9-1ee2-43c3-84f7-03543566506e'
let url2 = 'https://sjxapi.frp.zhongzhengtx.com/wx'


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  let token = request.headers.get('x-gitlab-token')
  if (!request.headers.get('x-gitlab-event') || token !== 'schwifty') {
    return new Response('No Access', { status: 400 })
  }
  // 获取git操作的信息
  let data = await request.json()
  let result = await parser(data)

  let requestStruct = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(result)
  }

  let res = await fetch(nextLocationUrl, requestStruct);
  console.log(JSON.stringify(res))

  return new Response('BarbarianChief says hi!', { status: 200 })
}

async function parser(originData) {
  let temp
  let result
  console.log('event name:', originData.event_name)
  if (originData.object_kind === 'issue') {
    result = await issueParser(originData)
    console.log('afterIssueParser:', JSON.stringify(result))
    temp = issueFormatter(result)

  } else if (originData.object_kind === 'note') {
    result = await noteParser(originData)
    console.log('afterNoteParser:', JSON.stringify(result))
    temp = await noteFormatter(result)

  } else if (originData.object_kind === 'push') {
    result = await pushPaser(originData)
    console.log('afterPushParser:', JSON.stringify(result))
    temp = pushFormatter(result)

  }

  return temp
}

function issueParser(commitData) {
  let filteredData = {
    action: commitData.object_attributes.action,
    user: commitData.user.username,
    path_with_namespace: commitData.project.path_with_namespace,
    title: commitData.object_attributes.title,
    issueUrl: commitData.object_attributes.url
  }
  return filteredData
}

function issueFormatter(filteredData) {
  let content
  if (filteredData.action === 'open') {
    content = `${filteredData.user} 在 ${filteredData.path_with_namespace} 发布了\n\n[Issue]:${filteredData.title}\n[LINK]:${filteredData.issueUrl}`
  } else if (filteredData.action === 'close') {
    content = `${filteredData.user} 在 ${filteredData.path_with_namespace} 关闭了\n\n[Issue]:${filteredData.title}\n[LINK]:${filteredData.issueUrl}`
  } else if (filteredData.action === 'reopen') {
    content = `${filteredData.user} 在 ${filteredData.path_with_namespace} 重启了\n\n[Issue]:${filteredData.title}\n[LINK]:${filteredData.issueUrl}`
  }
  let formattedData = {
    "msgtype": "text",
    "text": {
      "content": content
    }
  }
  return formattedData
}

async function noteParser(commitData) {
  let filteredData = {
    status: 'newNote',
    user: commitData.user.username,
    path_with_namespace: commitData.project.path_with_namespace,
    issue: commitData.issue.title,
    commentUrl: commitData.object_attributes.url,
    description: commitData.object_attributes.description
  }
  // add new parser for comment with pics
  if (filteredData.description.match(/(\!\[\S+\]\(\S+\))/)) {
    filteredData.description = await shortenNotePicUrl(filteredData.description)
  }
  return filteredData
}

async function shortenNotePicUrl (description) {
  let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g
  let picInfoList = description.match(reg)
  for (let rawUrl of picInfoList) {
    let shortUrl = await shortenUrl(rawUrl)
    description = description.replace(rawUrl, shortUrl)
  }
  return description
}

async function noteFormatter(filteredData) {
  let content
  filteredData.commentUrl = await shortenUrl(filteredData.commentUrl)
  if (filteredData.status === 'newNote') {
    content = `${filteredData.user} 在 ${filteredData.path_with_namespace} 的信息更新\n\n[Issue]:${filteredData.issue}\n[LINK] ${filteredData.commentUrl}\n\n[comment]:${filteredData.description}`
  }
  let formattedData = {
    "msgtype": "text",
    "text": {
      "content": content
    }
  }
  return formattedData
}

async function pushPaser(commitData) {
  if (commitData.commits.length === 0) {
    let repositoryUrl = await shortenUrl(commitData.repository.homepage)
    if (commitData.before.match(/^0+$/)) {
      // new branch
      return {
        status: 'newBranch',
        refBranch: commitData.ref,
        path_with_namespace: commitData.project.path_with_namespace,
        username: commitData.user_name,
        repositoryUrl: repositoryUrl
      }
    } else if (commitData.after.match(/^0+$/)) {
      // delete branch
      return {
        status: 'deleteBranch',
        refBranch: commitData.ref,
        path_with_namespace: commitData.project.path_with_namespace,
        username: commitData.user_name,
        repositoryUrl: repositoryUrl
      }
    }
  }

  // new commits
  let filteredData = {
    status: 'modification',
    refBranch: commitData.ref,
    path_with_namespace: commitData.project.path_with_namespace,
    username: commitData.user_name,
    commitList: []
  }

  for (let c of commitData.commits) {
    let singleCommitUrl = await shortenUrl(c.url)
    let singleCommit = {
      message: c.message,
      code: c.id.slice(0, 8),
      url: singleCommitUrl
    }
    filteredData.commitList.push(singleCommit)
  }

  return filteredData
}

function pushFormatter(filteredData) {
  let content
  if (filteredData.status === 'newBranch') {
    content = `${filteredData.username} 在 ${filteredData.path_with_namespace} 推送了\n\n新分支：${filteredData.refBranch}\n[LINK] ${filteredData.repositoryUrl}`
  } else if (filteredData.status === 'deleteBranch') {
    content = `${filteredData.username} 在 ${filteredData.path_with_namespace} 删除了\n\n分支：${filteredData.refBranch}\n[LINK] ${filteredData.repositoryUrl}`
  } else if (filteredData.status === 'modification') {
    content = `[${filteredData.refBranch}]\n\n${filteredData.username} 在 ${filteredData.path_with_namespace} 推送了\n`
    for (let c of filteredData.commitList) {
      content += `\n[${c.code}] ${c.message}`
      content += `[LINK] ${c.url}\n`
    }
  }

  let formattedData = {
    "msgtype": "text",
    "text": {
      "content": content
    }
  }

  // let markdownData = {
  //   "msgtype": "markdown",
  //   "markdown": {
  //       "content": "实时新增用户反馈<font color="warning">132例</font>，请相关同事注意\n\n
  //       \>类型:<font color="comment">用户反馈</font>\n\n
  //       \>普通用户反馈:<font color="comment">117例</font>\n\n
  //       \>VIP用户反馈:<font color="comment">15例</font>"
  //   }
  // }

  return formattedData
}

async function shortenUrl(url) {
  let body = {
    long_url: url
  }

  let requestStruct = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(body)
  }

  let res = await fetch(shortenBase, requestStruct);
  let result = await res.json()
  return result.short_url
}

