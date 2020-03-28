const libs = require('./../../libs')

export default async (originData) => {
  let result = await noteParser(originData)
  let temp = await noteFormatter(result)
  return temp
}

async function shortenNotePicUrl (description) {
  let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g
  let picInfoList = description.match(reg)
  for (let rawUrl of picInfoList) {
    let shortUrl = await libs.sideKick.shortenUrl(rawUrl)
    description = description.replace(rawUrl, shortUrl)
  }
  return description
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

async function noteFormatter(filteredData) {
  let content
  filteredData.commentUrl = await libs.sideKick.shortenUrl(filteredData.commentUrl)
  if (filteredData.status === 'newNote') {
    content = `${filteredData.user} 在 ${filteredData.path_with_namespace} 的信息更新\n\n[Issue]:${filteredData.issue}\n[LINK] ${filteredData.commentUrl}\n\n[comment]:${filteredData.description}`
  }
  return content
}
