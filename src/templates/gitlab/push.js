const libs = require('./../../libs')

export default async (data) => {
  let result = await pushPaser(data)
  let temp = pushFormatter(result)
  return temp
}

async function pushPaser(commitData) {
  if (commitData.commits.length === 0) {
    let repositoryUrl = await libs.sideKick.shortenUrl(commitData.repository.homepage)
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
    let singleCommitUrl = await libs.sideKick.shortenUrl(c.url)
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
    
    content = `${filteredData.username} 在 ${filteredData.path_with_namespace} 推送了
    
    新分支：${filteredData.refBranch}

    [LINK] ${filteredData.repositoryUrl}`

  } else if (filteredData.status === 'deleteBranch') {
    content = `${filteredData.username} 在 ${filteredData.path_with_namespace} 删除了\n\n分支：${filteredData.refBranch}\n[LINK] ${filteredData.repositoryUrl}`
  } else if (filteredData.status === 'modification') {
    content = `[${filteredData.refBranch}]\n\n${filteredData.username} 在 ${filteredData.path_with_namespace} 推送了\n`
    for (let c of filteredData.commitList) {
      content += `\n[${c.code}] ${c.message}`
      content += `[LINK] ${c.url}\n`
    }
  }

  content = content.split(/\n/).map(o => o.trim()).join('\n')

  return content
}
