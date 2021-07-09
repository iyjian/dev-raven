import {GithubWebHooks, GitLabWebHooks} from './../interfaces';
export const config = {
  shortenUrlBase: 'https://s.bidwin.top/api/v1/shorten',
  wechatWorkHost: 'https://qyapi.weixin.qq.com',
  wechatMpHost: 'https://h.tltr.top', // 这个推送是额外做的一个提供公众号推送的项目地址，非微信官方的地址
  template: {
    github: {
      issue: (data: GithubWebHooks.WebhookPayloadIssues) => {
        const message = `
          [${data.repository.name}][issue#${data.issue.number}]
          ${data.sender.login}(${data.action} issue)
          
          ${data.issue.title.length > 500 ? data.issue.title.substr(0, 500) + '...' : data.issue.title}
          ${data.issue.body.length > 500 ? data.issue.body.substr(0, 500) + '...' : data.issue.body}

          ${data.issue.html_url}
        `
        return message;
      },
      issueComment: (data: GithubWebHooks.WebhookPayloadIssueComment) => {
        const message = `
          [${data.repository.name}][issue#${data.issue.number}]
          ${data.sender.login}(new comment)
          
          ${data.issue.title.length > 500 ? data.issue.title.substr(0, 500) + '...' : data.issue.title}
          ${data.sender.login}: ${data.comment.body.length > 500 ? data.comment.body.substr(0, 500) + '...' : data.comment.body}

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
          ${data.sender.login} just deleted the ${data.ref_type}: ${data.ref}
        `
        return message;
      },
      push: (data: GithubWebHooks.WebhookPayloadPush) => {
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
        const message = `
          [${data.repository.name}]
          ${data.user_name} pushed ${data.ref.split('/')[1] === 'heads' ? 'on branch ' + data.ref.split('/')[2] : 'tag ' + data.ref.split('/')[2]} with the following commit(s):

          ${data.commits.map(o => '[' + o.id.substr(0, 7) + '] ' + o.message).join("\n")}
        `;
        return message;
      },
      tagPush: (data: GitLabWebHooks.TagPushEvent) => {
        return data;
      },
      /**
       * 新建、修改、关闭issue等回调，issue的评论在note事件中
      */
      issue: (data: GitLabWebHooks.IssueEvent) => {
        if (data.object_attributes.action === 'update' && 'assignees' in data.changes) {
          return `
            [${data.repository.name}] [${data.user.name}] [${data.object_attributes.action} #${data.object_attributes.iid}]

            issue分配给了: ${data.changes.assignees.current.map(o => o.name).join(',')}
          `
        } else {
          return `
          [${data.repository.name}] [${data.user.name}] [${data.object_attributes.action} #${data.object_attributes.iid}]
          
          ${data.object_attributes.title.length > 500 ? data.object_attributes.title.substr(0, 500) + '...' : data.object_attributes.title}

          ${data.object_attributes.description.length > 500 ? data.object_attributes.description.substr(0, 500) + '...' : data.object_attributes.description}

          ${data.object_attributes.url}
        `;
        }
      },
      note: (data: GitLabWebHooks.NoteEvent) => {
        /**
         * note有四种，现在只处理了comment on issue
         * 
         * Comment on issue:         data.object_attributes.noteable_type === 'Issue'
         * Comment on commit:        data.object_attributes.noteable_type === 'Commit'
         * Comment on code snippet:  data.object_attributes.noteable_type === 'Snippet'
         * Comment on merge request: data.object_attributes.noteable_type === 'MergeRequest'
        */
        
        // TODO: 要加个中间件把请求和返回都记下来
        // console.log(JSON.stringify(data, null, 2))
        
        if (data.object_attributes.noteable_type !== 'Issue') {
          return ''
        }

        // 注意下面的issue.iid 就是idd不是id
        const message = `
          [${data.repository.name}][issue#${data.issue.iid}]
          ${data.user.name}(new comment)
          
          ${data.issue.title.length > 500 ? data.issue.title.substr(0, 500) + '...' : data.issue.title}
          ${data.user.name}: ${data.object_attributes.note.length > 500 ? data.object_attributes.note.substr(0, 500) + '...' : data.object_attributes.note}

          ${data.object_attributes.url}
        `;
        return message;
      },
      mergeRequest: (data: GitLabWebHooks.MergeRequestEvent) => {
        return data;
      },
    },
  },
};
