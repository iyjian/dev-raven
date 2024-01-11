import { Injectable } from '@nestjs/common';
import {
  AliyunDockerWebHooks,
  GitLabWebHooks,
  SourcePlatform,
  GithubWebHooks,
  RawPayloadType,
} from './../interfaces';

export interface NotifyMessage {
  title: string;
  content: string;
}

@Injectable()
export class TransformerService {
  constructor() {}

  /**
   * 去除多行内容中每行的前后空格
   *
   * @param str - 原始内容
   * @returns
   */
  private trim(str: string): string {
    return str
      .split(/\n/)
      .map((o) => o.trim())
      .join('\n');
  }

  public getTargetType(
    targetAddress: string,
  ): 'email' | 'wechatGroup' | 'wecomGroup' | 'blackhole' {
    if (
      /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
        targetAddress,
      )
    ) {
      return 'email';
    } else if (/h\.tltr\.top/.test(targetAddress)) {
      return 'wechatGroup';
    } else if (/qyapi\.weixin\.qq\.com/.test(targetAddress)) {
      return 'wecomGroup';
    } else {
      return 'blackhole';
    }
  }

  public getTransformer(
    sourcePlatform: SourcePlatform,
    eventType: string,
  ): (payload: any) => NotifyMessage {
    switch (sourcePlatform) {
      case 'gitlab':
        switch (eventType) {
          case 'push':
            return this.gitlabPush;
          case 'issue':
            return this.gitlabIssue;
          case 'note':
            return this.gitlabNote;
          case 'pipeline':
            return this.gitlabPipeline;
          default:
            return this.dummyTransform;
        }
      /**
       * Webhook events and payloads
       * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads
       */
      case 'github':
        switch (eventType) {
          case 'push':
            return this.githubPush.bind(this);
          case 'issues':
            return this.githubIssues.bind(this);
          case 'issue_comment':
            return this.githubIssueComment.bind(this);
          default:
            return this.dummyTransform.bind(this);
        }
      case 'aliyundocker':
        return this.aliyunDockerPushData.bind(this);
      case 'raw':
        return this.rawTransformer.bind(this);
      default:
        return this.dummyTransform.bind(this);
    }
  }

  rawTransformer(payload: any): NotifyMessage {
    const { title, content } = payload;
    return {
      title: title,
      content: content,
    };
  }

  aliyunDockerPushData(
    payload: AliyunDockerWebHooks.AliyunDockerBuildPushPayload,
  ): NotifyMessage {
    const content = `阿里云镜像推送成功

      区域: ${payload.repository.region}
      镜像: ${payload.repository.repo_full_name}:${payload.push_data.tag}
      推送时间: ${payload.push_data.pushed_at}
    `;

    return {
      title: `[阿里云镜像推送成功] ${payload.repository.repo_full_name}:${payload.push_data.tag}`,
      content: this.trim(content),
    };
  }

  gitlabPush(payload: GitLabWebHooks.PushEvent): NotifyMessage {
    const content = `${payload.repository.name}
      ${payload.user_name} pushed on ${
      payload.ref.split('/')[1] === 'heads'
        ? 'branch ' + payload.ref.replace(/refs\/heads\//, '')
        : 'tag ' + payload.ref.replace(/refs\/tags\//, '')
    } with the following commit(s):

      ${payload.commits
        .map((o) => '[' + o.id.substring(0, 7) + '] ' + o.message)
        .join('\n')}
    `;

    return {
      title: `gitlab commit: ${payload.repository.name}`,
      content: this.trim(content),
    };
  }

  gitlabIssue(payload: GitLabWebHooks.IssueEvent) {
    let content: string;

    if (payload.changes.closed_at) {
      content = `${payload.repository.name} ${payload.object_attributes.title}(已关闭)

      ${payload.object_attributes.url}`;
    } else {
      content = `${payload.repository.name} ${payload.object_attributes.title}
      当前责任人: ${
        payload.assignees
          ? payload.assignees
              .map((assignee) => assignee.name)
              .join(',')
          : ''
      }

      ${payload.object_attributes.url}`;
    }

    return {
      title: ``,
      content: this.trim(content),
    };
  }

  gitlabNote(payload: GitLabWebHooks.NoteEvent) {
    const content = `${payload.repository.name} ${payload.issue.title}
    ${payload.user.name}: ${payload.object_attributes.note}
    ${payload.issue.url}`;

    return {
      title: `comment:`,
      content: this.trim(content),
    };
  }

  gitlabPipeline(payload: GitLabWebHooks.PipelineEvent) {
    const content = `${payload.project.name}: ${payload.builds.map(build => build.stage + '(' + build.status + ')').join(' ')}`

    return {
      title: 'gitlab pipeline:',
      content: this.trim(content)
    }
  }

  githubPush(data: GithubWebHooks.WebhookPayloadPush): NotifyMessage {
    const commitType = data.ref.split('/')[1] === 'heads' ? '分支' : 'TAG';

    const content = `github代码提交: ${data.repository.full_name}
      
      推送者: ${data.pusher.name}  
      推送${commitType}: ${data.ref.split('/')[2]}
      推送提交:
      ${data.commits
        .map((o) => '[' + o.id.substr(0, 7) + '] ' + o.message)
        .join('\n')}
    `;

    return {
      title: `github commit: ${data.repository.full_name}`,
      content: this.trim(content),
    };
  }

  githubIssues(data: GithubWebHooks.WebhookPayloadIssues): NotifyMessage {
    const content = `github issue ${data.action}: ${
      data.repository.name
    }/issue#${data.issue.number}
      ${data.sender.login}
      
      ${
        data.issue.title.length > 500
          ? data.issue.title.substring(0, 500) + '...'
          : data.issue.title
      }
      ${
        data.issue.body.length > 500
          ? data.issue.body.substring(0, 500) + '...'
          : data.issue.body
      }

      ${data.issue.html_url}`;

    return {
      title: `github issue ${data.action}: ${data.repository.name}/issue#${data.issue.number}`,
      content: this.trim(content),
    };
  }

  githubIssueComment(
    data: GithubWebHooks.WebhookPayloadIssueComment,
  ): NotifyMessage {
    const content = `github issue评论: ${data.repository.name}/issue#${
      data.issue.number
    }
      ${data.sender.login}

      ${
        data.issue.title.length > 500
          ? data.issue.title.substring(0, 500) + '...'
          : data.issue.title
      }
      ${data.sender.login}: ${
      data.comment.body.length > 500
        ? data.comment.body.substring(0, 500) + '...'
        : data.comment.body
    }

      ${data.comment.html_url}`;
    return {
      title: `github issue ${data.action}: ${data.repository.name}/issue#${data.issue.number}`,
      content: this.trim(content),
    };
  }

  dummyTransform(data: any): NotifyMessage {
    return {
      title: '',
      content: '',
    };
  }
}
