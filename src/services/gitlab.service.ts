/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HookParse } from '../interfaces';
import { UrlService } from './url.service';

@Injectable()
export class GitLabHookService implements HookParse {
  constructor(private readonly urlService: UrlService) {}

  async parse(data: any): Promise<string> {
    const { object_kind } = data;
    if (this[`_${object_kind}Parser`] instanceof Function) {
      return this[`_${object_kind}Parser`](data);
    } else {
      throw new HttpException(
        `${object_kind} is not supported type`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  private async _pushParser(commitData) {
    if (commitData.commits.length === 0) {
      const repositoryUrl = await this.urlService
        .shortenUrl(commitData.repository.homepage)
        .toPromise();
      if (commitData.before.match(/^0+$/)) {
        // new branch
        return {
          status: 'newBranch',
          refBranch: commitData.ref,
          path_with_namespace: commitData.project.path_with_namespace,
          username: commitData.user_name,
          repositoryUrl: repositoryUrl,
        };
      } else if (commitData.after.match(/^0+$/)) {
        // delete branch
        return {
          status: 'deleteBranch',
          refBranch: commitData.ref,
          path_with_namespace: commitData.project.path_with_namespace,
          username: commitData.user_name,
          repositoryUrl: repositoryUrl,
        };
      }
    }

    // new commits
    const filteredData = {
      status: 'modification',
      refBranch: commitData.ref,
      path_with_namespace: commitData.project.path_with_namespace,
      username: commitData.user_name,
      commitList: [],
    };

    for (const c of commitData.commits) {
      const singleCommitUrl = await this.urlService
        .shortenUrl(c.url)
        .toPromise();
      const singleCommit = {
        message: c.message,
        code: c.id.slice(0, 8),
        url: singleCommitUrl,
      };
      filteredData.commitList.push(singleCommit);
    }

    return this._pushFormatter(filteredData);
  }

  private async _noteParser(commitData) {
    const filteredData = {
      status: 'newNote',
      user: commitData.user.username,
      path_with_namespace: commitData.project.path_with_namespace,
      issue: commitData.issue.title,
      commentUrl: commitData.object_attributes.url,
      description: commitData.object_attributes.description,
    };
    // add new parser for comment with pics
    if (filteredData.description.match(/(\!\[\S+\]\(\S+\))/)) {
      filteredData.description = await this._shortenNotePicUrl(
        filteredData.description,
      );
    }
    return this._noteFormatter(filteredData);
  }

  private async _issueParser(data) {
    const { user, project, object_attributes } = data;
    if (object_attributes.action === 'open') {
      object_attributes.action = 'opened';
    } else if (object_attributes.action === 'close') {
      object_attributes.action = 'closed';
    } else if (object_attributes.action === 'reopen') {
      object_attributes.action = 'reopened';
    }

    return `
      [${project.path_with_namespace}] ${user.username} ${object_attributes.action} an issue:
      
      ${object_attributes.title}

      [link]: ${object_attributes.issueUrl}
    `;
  }

  private _pushFormatter(filteredData) {
    let content;
    if (filteredData.status === 'newBranch') {
      content = `${filteredData.username} 在 ${filteredData.path_with_namespace} 推送了
      
      新分支：${filteredData.refBranch}

      [LINK] ${filteredData.repositoryUrl}`;
    } else if (filteredData.status === 'deleteBranch') {
      content = `${filteredData.username} 在 ${filteredData.path_with_namespace} 删除了\n\n分支：${filteredData.refBranch}\n[LINK] ${filteredData.repositoryUrl}`;
    } else if (filteredData.status === 'modification') {
      content = `[${filteredData.refBranch}]\n\n${filteredData.username} 在 ${filteredData.path_with_namespace} 推送了\n`;
      for (const c of filteredData.commitList) {
        content += `\n[${c.code}] ${c.message}`;
        content += `[LINK] ${c.url}\n`;
      }
    }

    content = content
      .split(/\n/)
      .map(o => o.trim())
      .join('\n');

    return content;
  }

  private async _noteFormatter(filteredData) {
    let content: string;
    filteredData.commentUrl = await this.urlService
      .shortenUrl(filteredData.commentUrl)
      .toPromise();
    if (filteredData.status === 'newNote') {
      content = `${filteredData.user} 在 ${filteredData.path_with_namespace} 的信息更新\n\n[Issue]:${filteredData.issue}\n[LINK] ${filteredData.commentUrl}\n\n[comment]:${filteredData.description}`;
    }
    return content;
  }

  private async _shortenNotePicUrl(description) {
    const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
    const picInfoList = description.match(reg);
    for (const rawUrl of picInfoList) {
      const shortUrl = await this.urlService.shortenUrl(rawUrl).toPromise();
      description = description.replace(rawUrl, shortUrl);
    }
    return description;
  }
}
