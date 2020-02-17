// import {aliyundocker} from "./../templates"

const parse = (body) => {
  /**
   * 阿里云的现在还比较简单，暂时就不用template了。
   */
  const {repository, push_data} = body
  let message = `[aliyun docker service]
  
  [region]: ${repository.region}

  [${repository.repo_full_name}:${push_data.tag}] has been pushed at:
  ${push_data.pushed_at}
  `
  message = message.split(/\n/).map(o => o.trim()).join('\n')
  return message
}

export default {
  parse
}
