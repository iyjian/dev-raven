export type PushEvent = {
  /**
   * object_kind=push
   */
  object_kind: string;
  /**
   * push之前commitId
   * "95790bf891e76fee5e1747ab589903a6a1f80f22"
   */
  before: string;
  /**
   * push之后commitId
   * "da1560886d4f094c3e6c9ef40349f7d38b5d27d7"
   */
  after: string;
  /**
   * 分支名称
   * 例如："refs/heads/master" 分支名其实为 master
   */
  ref: string;
  checkout_sha: string;
  user_id: number;
  /**
   * 用户昵称吧
   * xihuanhh
   */
  user_name: string;
  /**
   * 用户登录名
   * zhangyu
   */
  user_username: string;
  user_email: string;
  user_avatar: string;
  project_id: number;
  /**
   * 项目详情
   */
  project: Project;
  /**
   * 仓库详情
   */
  repository: Repository;
  /**
   * commit列表
   */
  commits: Commit[];
  /**
   * commit总数
   */
  total_commits_count: number;
};

export type TagPushEvent = {
  /**
   * object_kind=tag_push
   */
  object_kind: string;
  /**
   * push之前commitId
   */
  before: string;
  /**
   * push之后commitId
   */
  after: string;
  /**
   * 分支名称
   * 例如："refs/heads/master" 分支名其实为 master
   */
  ref: string;
  checkout_sha: string;
  user_id: number;
  /**
   * 用户昵称吧
   */
  user_name: string;
  user_avatar: string;
  project_id: number;
  /**
   * 项目详情
   */
  project: Project;
  /**
   * 仓库详情
   */
  repository: Repository;
  /**
   * commit列表
   */
  commits: Commit[];
  /**
   * commit总数
   */
  total_commits_count: number;
};

export type IssueEvent = {
  /**
   * object_kind=issue
   */
  object_kind: string;
  /**
   * issue发起用户详情
   */
  user: User;
  /**
   * 项目详情
   */
  project: Project;
  /**
   * 仓库详情
   */
  repository: Repository;
  /**
   * issue详情
   */
  object_attributes: IssueAttributes;
  /**
   * 指派用户详情列表
   */
  assignees: User[];
  assignee: User;
  /**
   * 标签
   */
  labels: Label[];
  /**
     * issue变更详情
     * "changes": {
        "updated_by_id": {
          "previous": null,
          "current": 1
        },
        "updated_at": {
          "previous": "2017-09-15 16:50:55 UTC",
          "current": "2017-09-15 16:52:00 UTC"
        },
     */
  changes: Changes;
};

type IssueAttributes = {
  /**
   * "301"
   */
  id: number;
  /**
   * "测试issue"
   */
  title: string;
  /**
   * 指定给谁谁的ids
   */
  assignee_ids: number[];
  /**
   * 指定给谁谁的id
   */
  assignee_id: number;
  /**
   * issue的作者id
   */
  author_id: number;
  /**
   * 项目id
   */
  project_id: number;
  /**
   * "2013-12-03T17:15:43Z",
   */
  created_at: string;
  /**
   * "2013-12-03T17:15:43Z",
   */
  updated_at: string;
  /**
   *
   */
  position: number;
  /**
   *
   */
  branch_name: string;
  /**
   *
   */
  description: string;
  /**
   *
   */
  milestone_id: number;
  /**
   * “opened,closed 等等”
   */
  state: string;
  /**
   * "issue的实际url上的id"
   * 23
   */
  iid: number;
  /**
   *  "http://example.com/diaspora/issues/23"
   */
  url: string;
  /**
   * "open, close 等等"
   */
  action: string;
};

/**
 * issue、pr、commits、code snippets
 * 在以上所有信息上标注的comment都会触发noteEvent
 */
export type NoteEvent = {
  /**
   * object_kind=note
   */
  object_kind: string;
  /**
   * comment发起用户详情
   */
  user: User;
  project_id: number;
  /**
   * 项目详情
   */
  project: Project;
  /**
   * 仓库详情
   */
  repository: Repository;
  /**
   * comment详情
   */
  object_attributes: NoteAttributes;
  /**
   * 如果是commitComment,显示commit详情
   */
  commit?: Commit;
  /**
   * 如果是mergeRequestComment,显示mergeRequest详情
   */
  merge_request?: MergeRequest;
  /**
   * 如果是issueComment,显示issue详情
   */
  issue?: Issue;
  /**
   * 如果是代码片段snippetComment,显示snippet详情
   */
  snippet?: Snippet;
};

type NoteAttributes = {
  /**
   *  "id": 1243,
   */
  id: number;
  /**
   *    "note": "This is a commit comment. How does this work?",
   */
  note: string;
  /**
     "noteable_type": "Commit|Merge_Request|Issue|Snippet",
     */
  noteable_type: string;
  /**
     "author_id": 1,
     */
  author_id: number;
  /**
     "created_at": "2015-05-17 18:08:09 UTC",
     */
  created_at: string;
  /**
     "updated_at": "2015-05-17 18:08:09 UTC",
     */
  updated_at: string;
  /**
     "project_id": 5,
     */
  project_id: number;
  /**
   *
   */
  attachment: any;
  /**
     "line_code": "bec9703f7a456cd2b4ab5fb3220ae016e3e394e3_0_1",
     */
  line_code: string;
  /**
     "commit_id": "cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
     */
  commit_id: string;
  /**
   *
   */
  noteable_id: number;
  /**
   *
   */
  system: boolean;
  /**
     * "st_diff": {
      "diff": "--- /dev/null\n+++ b/six\n@@ -0,0 +1 @@\n+Subproject commit 409f37c4f05865e4fb208c771485f211a22c4c2d\n",
      "new_path": "six",
      "old_path": "six",
      "a_mode": "0",
      "b_mode": "160000",
      "new_file": true,
      "renamed_file": false,
      "deleted_file": false
    },
     */
  st_diff: StDiff;
  /**
     "url": "http://example.com/gitlab-org/gitlab-test/commit/cfe32cf61b73a0d5e9f13e774abde7ff789b1660#note_1243"
     */
  url: string;
};

export type MergeRequestEvent = {
  /**
   * object_kind=merge_request
   */
  object_kind: string;
  /**
   * merger_request发起用户详情
   */
  user: User;
  /**
   * 项目详情
   */
  project: Project;
  /**
   * 仓库详情
   */
  repository: Repository;
  /**
   * merge_request详情
   */
  object_attributes: MergeRequestAttributes;
  labels: Label[];
  changes: Changes;
};

type MergeRequestAttributes = {
  /**
     "id": 99,
     */
  id: number;
  /**
     "target_branch": "master",
     */
  target_branch: string;
  /**
     "source_branch": "dev",
     */
  source_branch: string;
  /**
     "source_project_id": 14,
     */
  source_project_id: number;
  /**
     "author_id": 51,
     */
  author_id: number;
  /**
     "assignee_id": 6,
     */
  assignee_id: number;
  /**
     "title": "merge dev to master",
     */
  title: string;
  /**
     "created_at": "2013-12-03T17:23:34Z",
     */
  created_at: string;
  /**
     "updated_at": "2013-12-03T17:23:34Z",
     */
  updated_at: string;
  /**
   *
   */
  milestone_id: null;
  /**
     "state": "opened",
     */
  state: string;
  /**
     "merge_status": "unchecked",
     */
  merge_status: string;
  /**
     "target_project_id": 14,
     */
  target_project_id: number;
  /**
     "iid": 1,
     */
  iid: number;
  /**
   * "测试合并dev到master"
   */
  description: string;
  /**
   *
   */
  source: Project;
  target: Project;
  last_commit: LastCommit;
  work_in_progress: boolean;
  /**
   * "url": "http://example.com/diaspora/merge_requests/1",
   */
  url: string;
  /**
   * open,close,reopen等等
   */
  action: string;
  assignee: User;
};

type WikiPageEvent = {
  object_kind: string;
  user: User;
  project: Project;
  wiki: Wiki;
  object_attributes: WikiPageAttributes;
};

type WikiPageAttributes = {
  title: string;
  content: string;
  format: string;
  message: string;
  slug: string;
  url: string;
  action: string;
};

type PipelineEvent = {
  object_kind: string;
  object_attributes: PipelineAttributes;
  user: User;
  project: Project;
  commit: Commit;
  builds: Build[];
};

type PipelineAttributes = {
  id: number;
  ref: string;
  tag: boolean;
  sha: string;
  before_sha: string;
  status: string;
  stages: string[];
  created_at: string;
  finished_at: string;
  duration: number;
};

type BuildEvent = {
  object_kind: string;
  ref: string;
  tag: boolean;
  before_sha: string;
  sha: string;
  build_id: number;
  build_name: string;
  build_stage: string;
  build_status: string;
  build_started_at: string;
  build_finished_at: string;
  build_duration: any;
  build_allow_failure: boolean;
  project_id: number;
  project_name: string;
  user: User;
  commit: Commit;
  repository: Repository;
};

type StDiff = {
  diff: string;
  new_path: string;
  old_path: string;
  a_mode: string;
  b_mode: string;
  new_file: boolean;
  renamed_file: boolean;
  deleted_file: boolean;
};

type Issue = {
  id: number;
  title: string;
  url: string;
  assignee_ids: number[];
  assignee_id: number;
  author_id: number;
  project_id: number;
  created_at: string;
  updated_at: string;
  position: number;
  branch_name: string;
  description: string;
  milestone_id: number;
  state: string;
  iid: number;
};

type Snippet = {
  id: number;
  title: string;
  content: string;
  author_id: number;
  project_id: number;
  created_at: string;
  updated_at: string;
  file_name: string;
  expires_at: string;
  type: string;
  visibility_level: number;
};

type Commit = {
  /**
   * "b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327"
   */
  id: string;
  /**
   * "这是测试提交"
   */
  message: string;
  /**
   * "2011-12-12T14:27:31+02:00",
   */
  timestamp: string;
  /**
   * "http://example.com/mike/webot/commit/b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",
   */
  url: string;
  /**
   *
   */
  author: Author;
};

type Build = {
  id: number;
  stage: string;
  name: string;
  status: string;
  created_at: string;
  started_at?: string;
  finished_at?: string;
  when: string;
  manual: boolean;
  user: User;
  runner: any;
  artifacts_file: ArtifactsFile;
};

type ArtifactsFile = {
  filename: string;
  size: number;
};

type Label = {
  id: number;
  title: string;
  color: string;
  project_id: number;
  created_at: string;
  updated_at: string;
  template: boolean;
  description: string;
  type: string;
  group_id: number;
};

type Changes = {
  updated_by_id: number[];
  updated_at: string[];
  closed_at: {
    previous?: string;
    current?: string;
  };
  labels: Labels;
  assignees: {
    previous: User[];
    current: User[];
  };
};

type Labels = {
  previous: Label[];
  current: Label[];
};

type MergeRequest = {
  id: number;
  target_branch: string;
  source_branch: string;
  source_project_id: number;
  author_id: number;
  assignee_id: number;
  title: string;
  created_at: string;
  updated_at: string;
  milestone_id: number;
  state: string;
  merge_status: string;
  target_project_id: number;
  iid: number;
  description: string;
  position: number;
  source: Project;
  target: Project;
  last_commit: LastCommit;
  work_in_progress: boolean;
  assignee: User;
};

type User = {
  name: string;
  username: string;
  avatar_url: string;
};

type LastCommit = {
  id: string;
  message: string;
  timestamp: string;
  url: string;
  author: Author;
};

type Author = {
  name: string;
  email: string;
};

type Project = {
  /**
   * 项目名
   * "webot"
   */
  name: string;
  /**
   * 描述
   * "这是前端webot项目"
   */
  description: string;
  /**
   * "http://example.com/mike/webot"
   */
  web_url: string;
  /**
   *
   */
  avatar_url: string;
  /**
   * "git@example.com:mike/webot.git"
   */
  git_ssh_url: string;
  /**
   * "http://example.com/mike/webot.git"
   */
  git_http_url: string;
  /**
   * "wuchong"
   */
  namespace: string;
  /**
   * 0
   */
  visibility_level: number;
  /**
   * "wuchong/webot"
   */
  path_with_namespace: string;
  /**
   * “master”
   */
  default_branch: string;
  /**
   * "http://example.com/mike/webot"
   */
  homepage: string;
  /**
   * "git@example.com:mike/webot.git"
   */
  url: string;
  /**
   * "git@example.com:mike/webot.git"
   */
  ssh_url: string;
  /**
   * "http://example.com/mike/webot.git"
   */
  http_url: string;
  id?: number;
};

type Repository = {
  /**
   * "webot"
   */
  name: string;
  /**
   * "git@example.com:mike/webot.git"
   */
  url: string;
  /**
   *
   */
  description: string;
  /**
   * "http://example.com/mike/webot",
   */
  homepage: string;
};

type Wiki = {
  web_url: string;
  git_ssh_url: string;
  git_http_url: string;
  path_with_namespace: string;
  default_branch: string;
};
