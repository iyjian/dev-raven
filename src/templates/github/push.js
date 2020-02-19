export default (data) => {
   
  let message = `
    [github] [${data.repository.full_name}]

    ${data.pusher.name} pushed on branch ${data.ref} with the following commit(s):
    
    ${data.commits.map(o => '[' + o.id.substr(0, 7) + '] ' + o.message).join("\n\n")}
  `

  message = message.split(/\n/).map(o => o.trim()).join('\n')

  return message
}
