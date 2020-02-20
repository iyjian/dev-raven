import gitlabIssue from './gitlab/issue'

import githubPush from './github/push'
import githubPing from './github/ping'

// export default {
//   gitlab: {
//     template: {
//       issue: gitlabIssue
//     }
//   },
//   github: {
//     template: {
//       push: githubPush,
//       ping: githubPing
//     }
//   }
// }

export const gitlab = {
  template: {
    issue: gitlabIssue
  }
}


export const github = {
  template: {
    push: githubPush,
    ping: githubPing
  }
}