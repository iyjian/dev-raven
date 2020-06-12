import { Webhooks as GithubWebHooks, GitLabWebHooks } from '../interfaces';
export const config = {
  shortenUrlBase: 'https://s.bidwin.top/api/v1/shorten',
  wechatWorkHost: 'https://qyapi.weixin.qq.com',
  template: {
    github: {
      issue: (data: GithubWebHooks.WebhookPayloadIssues) => {
        const message = `
          [${data.repository.name}][issue#${data.issue.id}]
          ${data.sender.login}: ${data.issue.title.length > 50 ? data.issue.title.substr(0, 50) + '...' : data.issue.title}

          ${data.issue.body.length > 50 ? data.issue.body.substr(0, 50) + '...' : data.issue.body}

          ${data.issue.url}
        `
        return message;
      },
      issueComment: (data: GithubWebHooks.WebhookPayloadIssueComment) => {
        const message = `
          [${data.repository.name}][issue#${data.issue.id}]
          ${data.sender.login}: ${data.comment.body.length > 50 ? data.comment.body.substr(0, 50) + '...' : data.comment.body}

          ${data.comment.url}
        `
        return message;
      },
      create: (data: GithubWebHooks.WebhookPayloadCreate) => {
        return data;
      },
      delete: (data: GithubWebHooks.WebhookPayloadDelete) => {
        return data;
      },
      push: (data: GithubWebHooks.WebhookPayloadPush) => {
        return data;
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
