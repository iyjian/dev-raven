import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HookParse, GitLabWebHooks } from '../interfaces';
import { UrlService } from './url.service';
import {Template} from "../decorators";
import {config} from "../config";

@Injectable()
export class GitLabHookService implements HookParse {
  constructor(private readonly urlService: UrlService) {}

  @Template(config.template.gitlab.push)
  async push(eventData: GitLabWebHooks.PushEvent) {
    //{
    //   "object_kind": "push",
    //   "before": "95790bf891e76fee5e1747ab589903a6a1f80f22",
    //   "after": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //   "ref": "refs/heads/master",
    //   "checkout_sha": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //   "user_id": 4,
    //   "user_name": "John Smith",
    //   "user_username": "jsmith",
    //   "user_email": "john@example.com",
    //   "user_avatar": "https://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=8://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=80",
    //   "project_id": 15,
    //   "project":{
    //     "id": 15,
    //     "name":"Diaspora",
    //     "description":"",
    //     "web_url":"http://example.com/mike/diaspora",
    //     "avatar_url":null,
    //     "git_ssh_url":"git@example.com:mike/diaspora.git",
    //     "git_http_url":"http://example.com/mike/diaspora.git",
    //     "namespace":"Mike",
    //     "visibility_level":0,
    //     "path_with_namespace":"mike/diaspora",
    //     "default_branch":"master",
    //     "homepage":"http://example.com/mike/diaspora",
    //     "url":"git@example.com:mike/diaspora.git",
    //     "ssh_url":"git@example.com:mike/diaspora.git",
    //     "http_url":"http://example.com/mike/diaspora.git"
    //   },
    //   "repository":{
    //     "name": "Diaspora",
    //     "url": "git@example.com:mike/diaspora.git",
    //     "description": "",
    //     "homepage": "http://example.com/mike/diaspora",
    //     "git_http_url":"http://example.com/mike/diaspora.git",
    //     "git_ssh_url":"git@example.com:mike/diaspora.git",
    //     "visibility_level":0
    //   },
    //   "commits": [
    //     {
    //       "id": "b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",
    //       "message": "Update Catalan translation to e38cb41.\n\nSee https://gitlab.com/gitlab-org/gitlab for more information",
    //       "title": "Update Catalan translation to e38cb41.",
    //       "timestamp": "2011-12-12T14:27:31+02:00",
    //       "url": "http://example.com/mike/diaspora/commit/b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",
    //       "author": {
    //         "name": "Jordi Mallach",
    //         "email": "jordi@softcatala.org"
    //       },
    //       "added": ["CHANGELOG"],
    //       "modified": ["app/controller/application.rb"],
    //       "removed": []
    //     },
    //     {
    //       "id": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //       "message": "fixed readme",
    //       "title": "fixed readme",
    //       "timestamp": "2012-01-03T23:36:29+02:00",
    //       "url": "http://example.com/mike/diaspora/commit/da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //       "author": {
    //         "name": "GitLab dev user",
    //         "email": "gitlabdev@dv6700.(none)"
    //       },
    //       "added": ["CHANGELOG"],
    //       "modified": ["app/controller/application.rb"],
    //       "removed": []
    //     }
    //   ],
    //   "total_commits_count": 4
    // }
    // return this._pushParser(eventData);
    return eventData
  }

  @Template(config.template.gitlab.tagPush)
  async tagPush(eventData: GitLabWebHooks.TagPushEvent) {
    //{
    //   "object_kind": "tag_push",
    //   "before": "0000000000000000000000000000000000000000",
    //   "after": "82b3d5ae55f7080f1e6022629cdb57bfae7cccc7",
    //   "ref": "refs/tags/v1.0.0",
    //   "checkout_sha": "82b3d5ae55f7080f1e6022629cdb57bfae7cccc7",
    //   "user_id": 1,
    //   "user_name": "John Smith",
    //   "user_avatar": "https://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=8://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=80",
    //   "project_id": 1,
    //   "project":{
    //     "id": 1,
    //     "name":"Example",
    //     "description":"",
    //     "web_url":"http://example.com/jsmith/example",
    //     "avatar_url":null,
    //     "git_ssh_url":"git@example.com:jsmith/example.git",
    //     "git_http_url":"http://example.com/jsmith/example.git",
    //     "namespace":"Jsmith",
    //     "visibility_level":0,
    //     "path_with_namespace":"jsmith/example",
    //     "default_branch":"master",
    //     "homepage":"http://example.com/jsmith/example",
    //     "url":"git@example.com:jsmith/example.git",
    //     "ssh_url":"git@example.com:jsmith/example.git",
    //     "http_url":"http://example.com/jsmith/example.git"
    //   },
    //   "repository":{
    //     "name": "Example",
    //     "url": "ssh://git@example.com/jsmith/example.git",
    //     "description": "",
    //     "homepage": "http://example.com/jsmith/example",
    //     "git_http_url":"http://example.com/jsmith/example.git",
    //     "git_ssh_url":"git@example.com:jsmith/example.git",
    //     "visibility_level":0
    //   },
    //   "commits": [],
    //   "total_commits_count": 0
    // }
    return eventData
  }

  @Template(config.template.gitlab.issue)
  async issue(eventData: GitLabWebHooks.IssueEvent) {
    // {
    //   "object_kind": "issue",
    //     "event_type": "issue",
    //     "user": {
    //   "name": "Administrator",
    //       "username": "root",
    //       "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon",
    //       "email": "admin@example.com"
    // },
    //   "project": {
    //   "id": 1,
    //       "name":"Gitlab Test",
    //       "description":"Aut reprehenderit ut est.",
    //       "web_url":"http://example.com/gitlabhq/gitlab-test",
    //       "avatar_url":null,
    //       "git_ssh_url":"git@example.com:gitlabhq/gitlab-test.git",
    //       "git_http_url":"http://example.com/gitlabhq/gitlab-test.git",
    //       "namespace":"GitlabHQ",
    //       "visibility_level":20,
    //       "path_with_namespace":"gitlabhq/gitlab-test",
    //       "default_branch":"master",
    //       "ci_config_path": null,
    //       "homepage":"http://example.com/gitlabhq/gitlab-test",
    //       "url":"http://example.com/gitlabhq/gitlab-test.git",
    //       "ssh_url":"git@example.com:gitlabhq/gitlab-test.git",
    //       "http_url":"http://example.com/gitlabhq/gitlab-test.git"
    // },
    //   "object_attributes": {
    //   "id": 301,
    //       "title": "New API: create/update/delete file",
    //       "assignee_ids": [51],
    //       "assignee_id": 51,
    //       "author_id": 51,
    //       "project_id": 14,
    //       "created_at": "2013-12-03T17:15:43Z",
    //       "updated_at": "2013-12-03T17:15:43Z",
    //       "updated_by_id": 1,
    //       "last_edited_at": null,
    //       "last_edited_by_id": null,
    //       "relative_position": 0,
    //       "description": "Create new API for manipulations with repository",
    //       "milestone_id": null,
    //       "state_id": 1,
    //       "confidential": false,
    //       "discussion_locked": true,
    //       "due_date": null,
    //       "moved_to_id": null,
    //       "duplicated_to_id": null,
    //       "time_estimate": 0,
    //       "total_time_spent": 0,
    //       "human_total_time_spent": null,
    //       "human_time_estimate": null,
    //       "weight": null,
    //       "iid": 23,
    //       "url": "http://example.com/diaspora/issues/23",
    //       "state": "opened",
    //       "action": "open",
    //       "labels": [{
    //     "id": 206,
    //     "title": "API",
    //     "color": "#ffffff",
    //     "project_id": 14,
    //     "created_at": "2013-12-03T17:15:43Z",
    //     "updated_at": "2013-12-03T17:15:43Z",
    //     "template": false,
    //     "description": "API related issues",
    //     "type": "ProjectLabel",
    //     "group_id": 41
    //   }]
    // },
    //   "repository": {
    //   "name": "Gitlab Test",
    //       "url": "http://example.com/gitlabhq/gitlab-test.git",
    //       "description": "Aut reprehenderit ut est.",
    //       "homepage": "http://example.com/gitlabhq/gitlab-test"
    // },
    //   "assignees": [{
    //   "name": "User1",
    //   "username": "user1",
    //   "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
    // }],
    //     "assignee": {
    //   "name": "User1",
    //       "username": "user1",
    //       "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
    // },
    //   "labels": [{
    //   "id": 206,
    //   "title": "API",
    //   "color": "#ffffff",
    //   "project_id": 14,
    //   "created_at": "2013-12-03T17:15:43Z",
    //   "updated_at": "2013-12-03T17:15:43Z",
    //   "template": false,
    //   "description": "API related issues",
    //   "type": "ProjectLabel",
    //   "group_id": 41
    // }],
    //     "changes": {
    //   "updated_by_id": {
    //     "previous": null,
    //         "current": 1
    //   },
    //   "updated_at": {
    //     "previous": "2017-09-15 16:50:55 UTC",
    //         "current": "2017-09-15 16:52:00 UTC"
    //   },
    //   "labels": {
    //     "previous": [{
    //       "id": 206,
    //       "title": "API",
    //       "color": "#ffffff",
    //       "project_id": 14,
    //       "created_at": "2013-12-03T17:15:43Z",
    //       "updated_at": "2013-12-03T17:15:43Z",
    //       "template": false,
    //       "description": "API related issues",
    //       "type": "ProjectLabel",
    //       "group_id": 41
    //     }],
    //         "current": [{
    //       "id": 205,
    //       "title": "Platform",
    //       "color": "#123123",
    //       "project_id": 14,
    //       "created_at": "2013-12-03T17:15:43Z",
    //       "updated_at": "2013-12-03T17:15:43Z",
    //       "template": false,
    //       "description": "Platform related issues",
    //       "type": "ProjectLabel",
    //       "group_id": 41
    //     }]
    //   }
    // }
    // }

    return eventData
    // return this._issueParser(eventData);
  }

  @Template(config.template.gitlab.note)
  async note(eventData: GitLabWebHooks.NoteEvent) {
    // comment 和 mergeRequest之类的comment都是 note 事件

    // {
    //   "object_kind": "note",
    //     "user": {
    //   "name": "Administrator",
    //       "username": "root",
    //       "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
    // },
    //   "project_id": 5,
    //     "project":{
    //   "id": 5,
    //       "name":"Gitlab Test",
    //       "description":"Aut reprehenderit ut est.",
    //       "web_url":"http://example.com/gitlabhq/gitlab-test",
    //       "avatar_url":null,
    //       "git_ssh_url":"git@example.com:gitlabhq/gitlab-test.git",
    //       "git_http_url":"http://example.com/gitlabhq/gitlab-test.git",
    //       "namespace":"GitlabHQ",
    //       "visibility_level":20,
    //       "path_with_namespace":"gitlabhq/gitlab-test",
    //       "default_branch":"master",
    //       "homepage":"http://example.com/gitlabhq/gitlab-test",
    //       "url":"http://example.com/gitlabhq/gitlab-test.git",
    //       "ssh_url":"git@example.com:gitlabhq/gitlab-test.git",
    //       "http_url":"http://example.com/gitlabhq/gitlab-test.git"
    // },
    //   "repository":{
    //   "name": "Gitlab Test",
    //       "url": "http://example.com/gitlab-org/gitlab-test.git",
    //       "description": "Aut reprehenderit ut est.",
    //       "homepage": "http://example.com/gitlab-org/gitlab-test"
    // },
    //   "object_attributes": {
    //   "id": 1243,
    //       "note": "This is a commit comment. How does this work?",
    //       "noteable_type": "Commit",
    //       "author_id": 1,
    //       "created_at": "2015-05-17 18:08:09 UTC",
    //       "updated_at": "2015-05-17 18:08:09 UTC",
    //       "project_id": 5,
    //       "attachment":null,
    //       "line_code": "bec9703f7a456cd2b4ab5fb3220ae016e3e394e3_0_1",
    //       "commit_id": "cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
    //       "noteable_id": null,
    //       "system": false,
    //       "st_diff": {
    //     "diff": "--- /dev/null\n+++ b/six\n@@ -0,0 +1 @@\n+Subproject commit 409f37c4f05865e4fb208c771485f211a22c4c2d\n",
    //         "new_path": "six",
    //         "old_path": "six",
    //         "a_mode": "0",
    //         "b_mode": "160000",
    //         "new_file": true,
    //         "renamed_file": false,
    //         "deleted_file": false
    //   },
    //   "url": "http://example.com/gitlab-org/gitlab-test/commit/cfe32cf61b73a0d5e9f13e774abde7ff789b1660#note_1243"
    // },
    //   "commit": {
    //   "id": "cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
    //       "message": "Add submodule\n\nSigned-off-by: Example User \u003cuser@example.com.com\u003e\n",
    //       "timestamp": "2014-02-27T10:06:20+02:00",
    //       "url": "http://example.com/gitlab-org/gitlab-test/commit/cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
    //       "author": {
    //     "name": "Example User",
    //         "email": "user@example.com"
    //   }
    // }
    // }
    return eventData
    // return this._noteParser(eventData);
  }

  @Template(config.template.gitlab.mergeRequest)
  async mergeRequest(eventData: GitLabWebHooks.MergeRequestEvent) {
    //{
    //   "object_kind": "merge_request",
    //   "user": {
    //     "name": "Administrator",
    //     "username": "root",
    //     "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
    //   },
    //   "project": {
    //     "id": 1,
    //     "name":"Gitlab Test",
    //     "description":"Aut reprehenderit ut est.",
    //     "web_url":"http://example.com/gitlabhq/gitlab-test",
    //     "avatar_url":null,
    //     "git_ssh_url":"git@example.com:gitlabhq/gitlab-test.git",
    //     "git_http_url":"http://example.com/gitlabhq/gitlab-test.git",
    //     "namespace":"GitlabHQ",
    //     "visibility_level":20,
    //     "path_with_namespace":"gitlabhq/gitlab-test",
    //     "default_branch":"master",
    //     "homepage":"http://example.com/gitlabhq/gitlab-test",
    //     "url":"http://example.com/gitlabhq/gitlab-test.git",
    //     "ssh_url":"git@example.com:gitlabhq/gitlab-test.git",
    //     "http_url":"http://example.com/gitlabhq/gitlab-test.git"
    //   },
    //   "repository": {
    //     "name": "Gitlab Test",
    //     "url": "http://example.com/gitlabhq/gitlab-test.git",
    //     "description": "Aut reprehenderit ut est.",
    //     "homepage": "http://example.com/gitlabhq/gitlab-test"
    //   },
    //   "object_attributes": {
    //     "id": 99,
    //     "target_branch": "master",
    //     "source_branch": "ms-viewport",
    //     "source_project_id": 14,
    //     "author_id": 51,
    //     "assignee_id": 6,
    //     "title": "MS-Viewport",
    //     "created_at": "2013-12-03T17:23:34Z",
    //     "updated_at": "2013-12-03T17:23:34Z",
    //     "milestone_id": null,
    //     "state": "opened",
    //     "merge_status": "unchecked",
    //     "target_project_id": 14,
    //     "iid": 1,
    //     "description": "",
    //     "source": {
    //       "name":"Awesome Project",
    //       "description":"Aut reprehenderit ut est.",
    //       "web_url":"http://example.com/awesome_space/awesome_project",
    //       "avatar_url":null,
    //       "git_ssh_url":"git@example.com:awesome_space/awesome_project.git",
    //       "git_http_url":"http://example.com/awesome_space/awesome_project.git",
    //       "namespace":"Awesome Space",
    //       "visibility_level":20,
    //       "path_with_namespace":"awesome_space/awesome_project",
    //       "default_branch":"master",
    //       "homepage":"http://example.com/awesome_space/awesome_project",
    //       "url":"http://example.com/awesome_space/awesome_project.git",
    //       "ssh_url":"git@example.com:awesome_space/awesome_project.git",
    //       "http_url":"http://example.com/awesome_space/awesome_project.git"
    //     },
    //     "target": {
    //       "name":"Awesome Project",
    //       "description":"Aut reprehenderit ut est.",
    //       "web_url":"http://example.com/awesome_space/awesome_project",
    //       "avatar_url":null,
    //       "git_ssh_url":"git@example.com:awesome_space/awesome_project.git",
    //       "git_http_url":"http://example.com/awesome_space/awesome_project.git",
    //       "namespace":"Awesome Space",
    //       "visibility_level":20,
    //       "path_with_namespace":"awesome_space/awesome_project",
    //       "default_branch":"master",
    //       "homepage":"http://example.com/awesome_space/awesome_project",
    //       "url":"http://example.com/awesome_space/awesome_project.git",
    //       "ssh_url":"git@example.com:awesome_space/awesome_project.git",
    //       "http_url":"http://example.com/awesome_space/awesome_project.git"
    //     },
    //     "last_commit": {
    //       "id": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //       "message": "fixed readme",
    //       "timestamp": "2012-01-03T23:36:29+02:00",
    //       "url": "http://example.com/awesome_space/awesome_project/commits/da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
    //       "author": {
    //         "name": "GitLab dev user",
    //         "email": "gitlabdev@dv6700.(none)"
    //       }
    //     },
    //     "work_in_progress": false,
    //     "url": "http://example.com/diaspora/merge_requests/1",
    //     "action": "open",
    //     "assignee": {
    //       "name": "User1",
    //       "username": "user1",
    //       "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
    //     }
    //   },
    //   "labels": [{
    //     "id": 206,
    //     "title": "API",
    //     "color": "#ffffff",
    //     "project_id": 14,
    //     "created_at": "2013-12-03T17:15:43Z",
    //     "updated_at": "2013-12-03T17:15:43Z",
    //     "template": false,
    //     "description": "API related issues",
    //     "type": "ProjectLabel",
    //     "group_id": 41
    //   }],
    //   "changes": {
    //     "updated_by_id": {
    //       "previous": null,
    //       "current": 1
    //     },
    //     "updated_at": {
    //       "previous": "2017-09-15 16:50:55 UTC",
    //       "current":"2017-09-15 16:52:00 UTC"
    //     },
    //     "labels": {
    //       "previous": [{
    //         "id": 206,
    //         "title": "API",
    //         "color": "#ffffff",
    //         "project_id": 14,
    //         "created_at": "2013-12-03T17:15:43Z",
    //         "updated_at": "2013-12-03T17:15:43Z",
    //         "template": false,
    //         "description": "API related issues",
    //         "type": "ProjectLabel",
    //         "group_id": 41
    //       }],
    //       "current": [{
    //         "id": 205,
    //         "title": "Platform",
    //         "color": "#123123",
    //         "project_id": 14,
    //         "created_at": "2013-12-03T17:15:43Z",
    //         "updated_at": "2013-12-03T17:15:43Z",
    //         "template": false,
    //         "description": "Platform related issues",
    //         "type": "ProjectLabel",
    //         "group_id": 41
    //       }]
    //     }
    //   }
    // }

    return eventData
    // const { user, project, object_attributes } = eventData;

    // return `
    // merge_request\n
    // ${user.name} 在 ${project.name} ${object_attributes.action} 了 merge_request\n
    // [标题]: ${object_attributes.title}\n
    // [source]: ${object_attributes.source_branch}\n
    // [target]: ${object_attributes.target_branch}\n
    // [last_commit]: \n
    //    id:${object_attributes.last_commit.id}\n
    //    message:${object_attributes.last_commit.message}\n
    // [link]: ${object_attributes.url}
    // `.trim();
  }

  async parse(data: any, event: string): Promise<string> {
    if (this[event]) {
      return this[event](data, event);
    }
    return '';
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

      [标题]: ${object_attributes.title}
      
      [内容]: ${object_attributes.description}

      [link]: ${object_attributes.url}
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
