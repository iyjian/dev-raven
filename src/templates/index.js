import gitlabIssue from './gitlab/issue'

import githubPush from './github/push'

// export default {
//   gitlab: {
//     issue: gitlabIssue
//   }
// }

export const gitlab = {
  template: {
    issue: gitlabIssue
  }
}

export const github = {
  template: {
    push: githubPush
  }
}