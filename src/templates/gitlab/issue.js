export default (data) => {
  const {user, project, object_attributes, repository} = data
  if (object_attributes.action === 'open') {
    object_attributes.action = 'opened'
  } else if (object_attributes.action === 'close') {
    object_attributes.action = 'closed'
  } else if (object_attributes.action === 'reopen') {
    object_attributes.action = 'reopened'
  }

  return `
    [${project.path_with_namespace}] ${user.username} ${object_attributes.action} an issue:
    
    ${object_attributes.title}

    [link]: ${object_attributes.issueUrl}
  `
}
