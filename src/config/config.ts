import { Webhooks as GithubWebHooks, GitLabWebHooks } from '../interfaces';
export const config = {
  shortenUrlBase: 'https://s.bidwin.top/api/v1/shorten',
  wechatWorkHost: 'https://qyapi.weixin.qq.com',
  template: {
    github: {
      issue: (data: GithubWebHooks.WebhookPayloadIssues) => {
        const message = `
          [${data.repository.name}][issue#${data.issue.number}]
          ${data.sender.login}: ${data.issue.title.length > 50 ? data.issue.title.substr(0, 50) + '...' : data.issue.title}
          ${data.issue.body.length > 50 ? data.issue.body.substr(0, 50) + '...' : data.issue.body}

          ${data.issue.html_url}
        `
        return message;
      },
      issueComment: (data: GithubWebHooks.WebhookPayloadIssueComment) => {
        const message = `
          [${data.repository.name}][issue#${data.issue.number}]
          ${data.sender.login}: ${data.issue.title.length > 50 ? data.issue.title.substr(0, 50) + '...' : data.issue.title}
          ${data.sender.login}: ${data.comment.body.length > 50 ? data.comment.body.substr(0, 50) + '...' : data.comment.body}

          ${data.comment.html_url}
        `
        return message;
      },
      create: (data: GithubWebHooks.WebhookPayloadCreate) => {
        return data;
      },
      delete: (data: GithubWebHooks.WebhookPayloadDelete) => {
        const message = `
          [${data.repository.full_name}]
        `
        return message;
      },
      push: (data: GithubWebHooks.WebhookPayloadPush) => {
        // ${data.pusher.name} ${data.created ? 'pushed' : data.deleted ? 'delete' : '----'} ${data.ref.split('/')[1] === 'heads' ? 'on branch' + data.ref.split('/')[2] : 'tag' + data.ref.split('/')[2]} with the following commit(s):
        const message = `
          [${data.repository.full_name}]
          ${data.pusher.name} pushed ${data.ref.split('/')[1] === 'heads' ? 'on branch ' + data.ref.split('/')[2] : 'tag ' + data.ref.split('/')[2]} with the following commit(s):

          ${data.commits.map(o => '[' + o.id.substr(0, 7) + '] ' + o.message).join("\n")}
        `
        return message;
      },
      pullRequest: (data: GithubWebHooks.WebhookPayloadPullRequest) => {
        return data;
      },
    },
    gitlab: {
      push: (data: GitLabWebHooks.PushEvent) => {
        return data;
      },
      tagPush: (data: GitLabWebHooks.TagPushEvent) => {
        return data;
      },
      issue: (data: GitLabWebHooks.IssueEvent) => {
        return data;
      },
      note: (data: GitLabWebHooks.NoteEvent) => {
        return data;
      },
      mergeRequest: (data: GitLabWebHooks.MergeRequestEvent) => {
        return data;
      },
    },
  },
};
