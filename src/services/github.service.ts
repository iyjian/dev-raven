import { Inject, Injectable } from '@nestjs/common';
import { GithubData, HookParse, Webhooks } from '../interfaces';
import { CONFIG_PROIVDE, config } from '../config';
import { Template } from '../decorators';

@Injectable()
export class GitHubHookService implements HookParse {
  constructor(@Inject(CONFIG_PROIVDE) private readonly config) {}

  @Template(config.template.github.issue)
  async issues(eventData: Webhooks.WebhookPayloadIssues) {
    const { action, issue, repository, sender } = eventData;
    return {
      title: issue.title,
      content: issue.body,
      url: issue.html_url,
      repository: repository.full_name,
      action,
      actionLogin: sender.type + ' : ' + sender.login,
    };
  }

  @Template(config.template.github.issueComment)
  async issue_comment(eventData: Webhooks.WebhookPayloadIssueComment) {
    const { action, issue, repository, comment, sender } = eventData;
    return {
      title: issue.title,
      content: issue.body,
      url: issue.html_url,
      commentContent: comment.body,
      commentUrl: comment.html_url,
      repository: repository.full_name,
      action,
      actionLogin: sender.type + ' : ' + sender.login,
    };
  }

  @Template(config.template.github.push)
  async push(eventData: Webhooks.WebhookPayloadPush) {
    const {
      ref,
      repository,
      sender,
      created,
      deleted,
      forced,
      compare,
      commits,
    } = eventData;
    return {
      name: ref,
      repository: repository.full_name,
      created,
      deleted,
      forced,
      compare,
      commits: commits
        .map(i => {
          return `commitId:${i.id}\nmessage:${i.message}\nurl:${i.url}\nauthor:${i.author.username}\ntime:${i.timestamp}`;
        })
        .join('\n\n'),
      actionLogin: sender.type + ' : ' + sender.login,
    };
  }

  @Template(config.template.github.create)
  async create(eventData: Webhooks.WebhookPayloadCreate) {
    const { ref, ref_type, repository, sender } = eventData;
    return {
      actionLogin: sender.type + ' : ' + sender.login,
      repository: repository.full_name,
      type: ref_type,
      name: ref,
    };
  }

  @Template(config.template.github.pullRequest)
  async pull_request(eventData: Webhooks.WebhookPayloadPullRequest) {
    const { action, pull_request } = eventData;
    return {
      action,
      title: pull_request.title,
      url: pull_request.html_url,
      state: pull_request.state,
      content: pull_request.body,
      actionLogin: pull_request.user.type + ' : ' + pull_request.user.login,
      createdAt: pull_request.created_at,
      updatedAt: pull_request.updated_at,
      closedAt: pull_request.closed_at,
      mergedAt: pull_request.merged_at,
      from:
        pull_request.head.user.login +
        ' 从仓库: ' +
        pull_request.head.repo.full_name +
        ' 发起合并, 分支:' +
        pull_request.head.label,
      to:
        '请求合并到 ' +
        pull_request.base.user.login +
        '的仓库 ' +
        pull_request.base.repo.full_name +
        '的分支: ' +
        pull_request.base.label,
    };
  }

  async parse(data: GithubData, event: string): Promise<string> {
    if (this[event]) {
      return this[event](data, event);
    }
    return '';
  }
}
