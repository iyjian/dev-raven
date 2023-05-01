type WebhookPayloadPingPayloadHookConfig = {
  content_type: string;
  insecure_ssl: string;
  url: string;
};
type WebhookPayloadPingPayloadHook = {
  type: string;
  id: number;
  name: string;
  active: boolean;
  events: Array<string>;
  config: WebhookPayloadPingPayloadHookConfig;
  updated_at: string;
  created_at: string;
  app_id: number;
};
type WebhookPayloadPingPayload = {
  zen: string;
  hook_id: number;
  hook: WebhookPayloadPingPayloadHook;
};
type WebhookPayloadPing = {
  event: string;
  payload: WebhookPayloadPingPayload;
};
type WebhookPayloadWatchSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadWatch = {
  action: string;
  repository: PayloadRepository;
  sender: WebhookPayloadWatchSender;
};
type WebhookPayloadTeamAddSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadTeamAddOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type WebhookPayloadTeamAddTeam = {
  name: string;
  id: number;
  node_id: string;
  slug: string;
  description: string;
  privacy: string;
  url: string;
  html_url: string;
  members_url: string;
  repositories_url: string;
  permission: string;
};
type WebhookPayloadTeamAdd = {
  team: WebhookPayloadTeamAddTeam;
  repository: PayloadRepository;
  organization: WebhookPayloadTeamAddOrganization;
  sender: WebhookPayloadTeamAddSender;
};
type WebhookPayloadTeamChanges = {};
type WebhookPayloadTeamSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadTeamOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type PayloadRepositoryPermissions = {
  pull: boolean;
  push: boolean;
  admin: boolean;
};
type WebhookPayloadTeamTeam = {
  name: string;
  id: number;
  node_id: string;
  slug: string;
  description: string | null;
  privacy: string;
  url: string;
  html_url: string;
  members_url: string;
  repositories_url: string;
  permission: string;
};
type WebhookPayloadTeam = {
  action: string;
  team: WebhookPayloadTeamTeam;
  repository?: PayloadRepository;
  organization: WebhookPayloadTeamOrganization;
  sender: WebhookPayloadTeamSender;
  changes?: WebhookPayloadTeamChanges;
};
type WebhookPayloadStatusSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadStatusBranchesItemCommit = { sha: string; url: string };
type WebhookPayloadStatusBranchesItem = {
  name: string;
  commit: WebhookPayloadStatusBranchesItemCommit;
  protected: boolean;
};
type WebhookPayloadStatusCommitCommitter = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadStatusCommitAuthor = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadStatusCommitCommitVerification = {
  verified: boolean;
  reason: string;
  signature: string;
  payload: string;
};
type WebhookPayloadStatusCommitCommitTree = { sha: string; url: string };
type WebhookPayloadStatusCommitCommitCommitter = {
  name: string;
  email: string;
  date: string;
};
type WebhookPayloadStatusCommitCommitAuthor = {
  name: string;
  email: string;
  date: string;
};
type WebhookPayloadStatusCommitCommit = {
  author: WebhookPayloadStatusCommitCommitAuthor;
  committer: WebhookPayloadStatusCommitCommitCommitter;
  message: string;
  tree: WebhookPayloadStatusCommitCommitTree;
  url: string;
  comment_count: number;
  verification: WebhookPayloadStatusCommitCommitVerification;
};
type WebhookPayloadStatusCommit = {
  sha: string;
  node_id: string;
  commit: WebhookPayloadStatusCommitCommit;
  url: string;
  html_url: string;
  comments_url: string;
  author: WebhookPayloadStatusCommitAuthor;
  committer: WebhookPayloadStatusCommitCommitter;
  parents: Array<any>;
};
type WebhookPayloadStatus = {
  id: number;
  sha: string;
  name: string;
  target_url: null;
  context: string;
  description: null;
  state: string;
  commit: WebhookPayloadStatusCommit;
  branches: Array<WebhookPayloadStatusBranchesItem>;
  created_at: string;
  updated_at: string;
  repository: PayloadRepository;
  sender: WebhookPayloadStatusSender;
};
type WebhookPayloadStarSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadStar = {
  action: string;
  starred_at: string | null;
  repository: PayloadRepository;
  sender: WebhookPayloadStarSender;
};
type WebhookPayloadSponsorshipChangesTierFrom = {
  node_id: string;
  created_at: string;
  description: string;
  monthly_price_in_cents: number;
  monthly_price_in_dollars: number;
  name: string;
};
type WebhookPayloadSponsorshipChangesTier = {
  from: WebhookPayloadSponsorshipChangesTierFrom;
};
type WebhookPayloadSponsorshipChanges = {
  tier: WebhookPayloadSponsorshipChangesTier;
};
type WebhookPayloadSponsorshipSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadSponsorshipSponsorshipTier = {
  node_id: string;
  created_at: string;
  description: string;
  monthly_price_in_cents: number;
  monthly_price_in_dollars: number;
  name: string;
};
type WebhookPayloadSponsorshipSponsorshipSponsor = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadSponsorshipSponsorshipSponsorable = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadSponsorshipSponsorship = {
  node_id: string;
  created_at: string;
  sponsorable: WebhookPayloadSponsorshipSponsorshipSponsorable;
  sponsor: WebhookPayloadSponsorshipSponsorshipSponsor;
  privacy_level: string;
  tier: WebhookPayloadSponsorshipSponsorshipTier;
};
type WebhookPayloadSponsorship = {
  action: string;
  sponsorship: WebhookPayloadSponsorshipSponsorship;
  sender: WebhookPayloadSponsorshipSender;
  changes?: WebhookPayloadSponsorshipChanges;
  effective_date?: string;
};
type WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItemFirstPatchedVersion =
  {
    identifier: string;
  };
type WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItemPackage =
  {
    ecosystem: string;
    name: string;
  };
type WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItem = {
  package: WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItemPackage;
  severity: string;
  vulnerable_version_range: string;
  first_patched_version: WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItemFirstPatchedVersion;
};
type WebhookPayloadSecurityAdvisorySecurityAdvisoryReferencesItem = {
  url: string;
};
type WebhookPayloadSecurityAdvisorySecurityAdvisoryIdentifiersItem = {
  value: string;
  type: string;
};
type WebhookPayloadSecurityAdvisorySecurityAdvisory = {
  ghsa_id: string;
  summary: string;
  description: string;
  severity: string;
  identifiers: Array<WebhookPayloadSecurityAdvisorySecurityAdvisoryIdentifiersItem>;
  references: Array<WebhookPayloadSecurityAdvisorySecurityAdvisoryReferencesItem>;
  published_at: string;
  updated_at: string;
  withdrawn_at: null;
  vulnerabilities: Array<WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItem>;
};
type WebhookPayloadSecurityAdvisory = {
  action: string;
  security_advisory: WebhookPayloadSecurityAdvisorySecurityAdvisory;
};
type WebhookPayloadRepositoryVulnerabilityAlertAlertDismisser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadRepositoryVulnerabilityAlertSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadRepositoryVulnerabilityAlertAlert = {
  id: number;
  affected_range: string;
  affected_package_name: string;
  external_reference: string;
  external_identifier: string;
  fixed_in: string;
  dismisser?: WebhookPayloadRepositoryVulnerabilityAlertAlertDismisser;
  dismiss_reason?: string;
  dismissed_at?: string;
};
type WebhookPayloadRepositoryVulnerabilityAlert = {
  action: string;
  alert: WebhookPayloadRepositoryVulnerabilityAlertAlert;
  repository?: PayloadRepository;
  sender?: WebhookPayloadRepositoryVulnerabilityAlertSender;
};
type WebhookPayloadRepositoryImportSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadRepositoryImportOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type WebhookPayloadRepositoryImport = {
  status: string;
  repository: PayloadRepository;
  organization: WebhookPayloadRepositoryImportOrganization;
  sender: WebhookPayloadRepositoryImportSender;
};
type WebhookPayloadRepositoryOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type WebhookPayloadRepositorySender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadRepository = {
  action: string;
  repository: PayloadRepository;
  sender: WebhookPayloadRepositorySender;
  organization?: WebhookPayloadRepositoryOrganization;
};
type WebhookPayloadRepositoryDispatchInstallation = {
  id: number;
  node_id: string;
};
type WebhookPayloadRepositoryDispatchSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadRepositoryDispatchOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type WebhookPayloadRepositoryDispatchClientPayload = {
  unit: boolean;
  integration: boolean;
};
type WebhookPayloadRepositoryDispatch = {
  action: string;
  branch: string;
  client_payload: WebhookPayloadRepositoryDispatchClientPayload;
  repository: PayloadRepository;
  organization: WebhookPayloadRepositoryDispatchOrganization;
  sender: WebhookPayloadRepositoryDispatchSender;
  installation: WebhookPayloadRepositoryDispatchInstallation;
};
type WebhookPayloadReleaseSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadReleaseReleaseAuthor = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadReleaseRelease = {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: null;
  draft: boolean;
  author: WebhookPayloadReleaseReleaseAuthor;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: Array<any>;
  tarball_url: string;
  zipball_url: string;
  body: null;
};
type WebhookPayloadRelease = {
  action: string;
  release: WebhookPayloadReleaseRelease;
  repository: PayloadRepository;
  sender: WebhookPayloadReleaseSender;
};
type WebhookPayloadPushSender = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadPushPusher = {
  /**
   * "xihuanhh"
   */
  name: string;
  /**
   * ""750375641@qq.com""
   */
  email: string;
};
export type WebhookPayloadPush = {
  /**
   * 本次推送的分支名称
   * 例如： ref/heads/dev 实际是 dev 分支
   */
  ref: string;
  /**
   * push之前的commitId
   * "0000000000000000000000000000000000000000"
   */
  before: string;
  /**
   * push之后的commitId
   * "e3c7ce690330810e33ed2b25274f0f2a68e2efec"
   */
  after: string;
  /**
   * 该分支是否是被push创建的
   *
   */
  created: boolean;
  /**
   * 该分支是否是被push删除的
   */
  deleted: boolean;
  /**
   * 是否强推的
   */
  forced: boolean;
  /**
   * base 分支
   *
   * refs/heads/master
   */
  base_ref: null;
  /**
   * 对比的url地址
   *
   * "https://github.com/xihuanhh/test/compare/dev"
   */
  compare: string;
  /**
   * 提交的commits列表
   * [
   *  {
        "id": "e3c7ce690330810e33ed2b25274f0f2a68e2efec",
        "tree_id": "577682e72d422180cde2f2dbf55a80097a5d3120",
        "distinct": true,
        "message": "Set theme jekyll-theme-cayman",
        "timestamp": "2020-06-04T14:37:30+08:00",
        "url": "https://github.com/xihuanhh/test/commit/e3c7ce690330810e33ed2b25274f0f2a68e2efec",
        "author": {
          "name": "xihuanhh",
          "email": "750375641@qq.com",
          "username": "xihuanhh"
        },
        "committer": {
          "name": "xihuanhh",
          "email": "750375641@qq.com",
          "username": "xihuanhh"
        },
        "added": [
          "_config.yml"
        ],
        "removed": [],
        "modified": []
      }
    * ]
    */
  commits: Array<any>;
  /**
   *   "head_commit": {
        "id": "e3c7ce690330810e33ed2b25274f0f2a68e2efec",
        "tree_id": "577682e72d422180cde2f2dbf55a80097a5d3120",
        "distinct": true,
        "message": "Set theme jekyll-theme-cayman",
        "timestamp": "2020-06-04T14:37:30+08:00",
        "url": "https://github.com/xihuanhh/test/commit/e3c7ce690330810e33ed2b25274f0f2a68e2efec",
        "author": {
          "name": "xihuanhh",
          "email": "750375641@qq.com",
          "username": "xihuanhh"
        },
        "committer": {
          "name": "xihuanhh",
          "email": "750375641@qq.com",
          "username": "xihuanhh"
        },
        "added": [
          "_config.yml"
        ],
        "removed": [],
        "modified": []
      }
    */
  head_commit: null;
  /**
   * 仓库所有信息
   */
  repository: PayloadRepository;
  /**
   * 推送人
   */
  pusher: WebhookPayloadPushPusher;
  /**
   * 和push一般一样，不过更详细
   */
  sender: WebhookPayloadPushSender;
};
type WebhookPayloadPullRequestReviewCommentSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinksStatuses = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinksCommits = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinksReviewComment = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinksReviewComments = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinksComments = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinksIssue = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinksHtml = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinksSelf = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestLinks = {
  self: WebhookPayloadPullRequestReviewCommentPullRequestLinksSelf;
  html: WebhookPayloadPullRequestReviewCommentPullRequestLinksHtml;
  issue: WebhookPayloadPullRequestReviewCommentPullRequestLinksIssue;
  comments: WebhookPayloadPullRequestReviewCommentPullRequestLinksComments;
  review_comments: WebhookPayloadPullRequestReviewCommentPullRequestLinksReviewComments;
  review_comment: WebhookPayloadPullRequestReviewCommentPullRequestLinksReviewComment;
  commits: WebhookPayloadPullRequestReviewCommentPullRequestLinksCommits;
  statuses: WebhookPayloadPullRequestReviewCommentPullRequestLinksStatuses;
};
type WebhookPayloadPullRequestReviewCommentPullRequestBaseRepoOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewCommentPullRequestBaseRepo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: WebhookPayloadPullRequestReviewCommentPullRequestBaseRepoOwner;
  html_url: string;
  description: null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestBaseUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewCommentPullRequestBase = {
  label: string;
  ref: string;
  sha: string;
  user: WebhookPayloadPullRequestReviewCommentPullRequestBaseUser;
  repo: WebhookPayloadPullRequestReviewCommentPullRequestBaseRepo;
};
type WebhookPayloadPullRequestReviewCommentPullRequestHeadRepoOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewCommentPullRequestHeadRepo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: WebhookPayloadPullRequestReviewCommentPullRequestHeadRepoOwner;
  html_url: string;
  description: null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
type WebhookPayloadPullRequestReviewCommentPullRequestHeadUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewCommentPullRequestHead = {
  label: string;
  ref: string;
  sha: string;
  user: WebhookPayloadPullRequestReviewCommentPullRequestHeadUser;
  repo: WebhookPayloadPullRequestReviewCommentPullRequestHeadRepo;
};
type WebhookPayloadPullRequestReviewCommentPullRequestUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewCommentPullRequest = {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: WebhookPayloadPullRequestReviewCommentPullRequestUser;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at: null;
  merged_at: null;
  merge_commit_sha: string;
  assignee: null;
  assignees: Array<any>;
  requested_reviewers: Array<any>;
  requested_teams: Array<any>;
  labels: Array<any>;
  milestone: null;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: WebhookPayloadPullRequestReviewCommentPullRequestHead;
  base: WebhookPayloadPullRequestReviewCommentPullRequestBase;
  _links: WebhookPayloadPullRequestReviewCommentPullRequestLinks;
  author_association: string;
};
type WebhookPayloadPullRequestReviewCommentCommentLinksPullRequest = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentCommentLinksHtml = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentCommentLinksSelf = {
  href: string;
};
type WebhookPayloadPullRequestReviewCommentCommentLinks = {
  self: WebhookPayloadPullRequestReviewCommentCommentLinksSelf;
  html: WebhookPayloadPullRequestReviewCommentCommentLinksHtml;
  pull_request: WebhookPayloadPullRequestReviewCommentCommentLinksPullRequest;
};
type WebhookPayloadPullRequestReviewCommentCommentUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewCommentComment = {
  url: string;
  pull_request_review_id: number;
  id: number;
  node_id: string;
  diff_hunk: string;
  path: string;
  position: number;
  original_position: number;
  commit_id: string;
  original_commit_id: string;
  user: WebhookPayloadPullRequestReviewCommentCommentUser;
  body: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  pull_request_url: string;
  author_association: string;
  _links: WebhookPayloadPullRequestReviewCommentCommentLinks;
};
type WebhookPayloadPullRequestReviewComment = {
  action: string;
  comment: WebhookPayloadPullRequestReviewCommentComment;
  pull_request: WebhookPayloadPullRequestReviewCommentPullRequest;
  repository: PayloadRepository;
  sender: WebhookPayloadPullRequestReviewCommentSender;
};
type WebhookPayloadPullRequestReviewSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewPullRequestLinksStatuses = {
  href: string;
};
type WebhookPayloadPullRequestReviewPullRequestLinksCommits = {
  href: string;
};
type WebhookPayloadPullRequestReviewPullRequestLinksReviewComment = {
  href: string;
};
type WebhookPayloadPullRequestReviewPullRequestLinksReviewComments = {
  href: string;
};
type WebhookPayloadPullRequestReviewPullRequestLinksComments = {
  href: string;
};
type WebhookPayloadPullRequestReviewPullRequestLinksIssue = { href: string };
type WebhookPayloadPullRequestReviewPullRequestLinksHtml = { href: string };
type WebhookPayloadPullRequestReviewPullRequestLinksSelf = { href: string };
type WebhookPayloadPullRequestReviewPullRequestLinks = {
  self: WebhookPayloadPullRequestReviewPullRequestLinksSelf;
  html: WebhookPayloadPullRequestReviewPullRequestLinksHtml;
  issue: WebhookPayloadPullRequestReviewPullRequestLinksIssue;
  comments: WebhookPayloadPullRequestReviewPullRequestLinksComments;
  review_comments: WebhookPayloadPullRequestReviewPullRequestLinksReviewComments;
  review_comment: WebhookPayloadPullRequestReviewPullRequestLinksReviewComment;
  commits: WebhookPayloadPullRequestReviewPullRequestLinksCommits;
  statuses: WebhookPayloadPullRequestReviewPullRequestLinksStatuses;
};
type WebhookPayloadPullRequestReviewPullRequestBaseRepoOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewPullRequestBaseRepo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: WebhookPayloadPullRequestReviewPullRequestBaseRepoOwner;
  html_url: string;
  description: null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
type WebhookPayloadPullRequestReviewPullRequestBaseUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewPullRequestBase = {
  label: string;
  ref: string;
  sha: string;
  user: WebhookPayloadPullRequestReviewPullRequestBaseUser;
  repo: WebhookPayloadPullRequestReviewPullRequestBaseRepo;
};
type WebhookPayloadPullRequestReviewPullRequestHeadRepoOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewPullRequestHeadRepo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: WebhookPayloadPullRequestReviewPullRequestHeadRepoOwner;
  html_url: string;
  description: null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
type WebhookPayloadPullRequestReviewPullRequestHeadUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewPullRequestHead = {
  label: string;
  ref: string;
  sha: string;
  user: WebhookPayloadPullRequestReviewPullRequestHeadUser;
  repo: WebhookPayloadPullRequestReviewPullRequestHeadRepo;
};
type WebhookPayloadPullRequestReviewPullRequestUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewPullRequest = {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: WebhookPayloadPullRequestReviewPullRequestUser;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at: null;
  merged_at: null;
  merge_commit_sha: string;
  assignee: null;
  assignees: Array<any>;
  requested_reviewers: Array<any>;
  requested_teams: Array<any>;
  labels: Array<any>;
  milestone: null;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: WebhookPayloadPullRequestReviewPullRequestHead;
  base: WebhookPayloadPullRequestReviewPullRequestBase;
  _links: WebhookPayloadPullRequestReviewPullRequestLinks;
  author_association: string;
};
type WebhookPayloadPullRequestReviewReviewLinksPullRequest = { href: string };
type WebhookPayloadPullRequestReviewReviewLinksHtml = { href: string };
type WebhookPayloadPullRequestReviewReviewLinks = {
  html: WebhookPayloadPullRequestReviewReviewLinksHtml;
  pull_request: WebhookPayloadPullRequestReviewReviewLinksPullRequest;
};
type WebhookPayloadPullRequestReviewReviewUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestReviewReview = {
  id: number;
  node_id: string;
  user: WebhookPayloadPullRequestReviewReviewUser;
  body: null;
  commit_id: string;
  submitted_at: string;
  state: string;
  html_url: string;
  pull_request_url: string;
  author_association: string;
  _links: WebhookPayloadPullRequestReviewReviewLinks;
};
type WebhookPayloadPullRequestReview = {
  action: string;
  review: WebhookPayloadPullRequestReviewReview;
  pull_request: WebhookPayloadPullRequestReviewPullRequest;
  repository: PayloadRepository;
  sender: WebhookPayloadPullRequestReviewSender;
};
type WebhookPayloadPullRequestLabel = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
};
type WebhookPayloadPullRequestPullRequestMilestoneCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestPullRequestMilestone = null | {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  description: string;
  creator: WebhookPayloadPullRequestPullRequestMilestoneCreator;
  open_issues: number;
  closed_issues: number;
  state: string;
  created_at: string;
  updated_at: string;
  due_on: string;
  closed_at: string;
};
type WebhookPayloadPullRequestPullRequestLabelsItem = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
};
type WebhookPayloadPullRequestPullRequestAssignee = null | {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestAssignee = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestPullRequestAssigneesItem = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestPullRequestLinksStatuses = { href: string };
type WebhookPayloadPullRequestPullRequestLinksCommits = { href: string };
type WebhookPayloadPullRequestPullRequestLinksReviewComment = {
  href: string;
};
type WebhookPayloadPullRequestPullRequestLinksReviewComments = {
  href: string;
};
type WebhookPayloadPullRequestPullRequestLinksComments = { href: string };
type WebhookPayloadPullRequestPullRequestLinksIssue = { href: string };
type WebhookPayloadPullRequestPullRequestLinksHtml = { href: string };
type WebhookPayloadPullRequestPullRequestLinksSelf = { href: string };
type WebhookPayloadPullRequestPullRequestLinks = {
  self: WebhookPayloadPullRequestPullRequestLinksSelf;
  html: WebhookPayloadPullRequestPullRequestLinksHtml;
  issue: WebhookPayloadPullRequestPullRequestLinksIssue;
  comments: WebhookPayloadPullRequestPullRequestLinksComments;
  review_comments: WebhookPayloadPullRequestPullRequestLinksReviewComments;
  review_comment: WebhookPayloadPullRequestPullRequestLinksReviewComment;
  commits: WebhookPayloadPullRequestPullRequestLinksCommits;
  statuses: WebhookPayloadPullRequestPullRequestLinksStatuses;
};
type WebhookPayloadPullRequestPullRequestBaseRepoOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestPullRequestBaseRepo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: WebhookPayloadPullRequestPullRequestBaseRepoOwner;
  html_url: string;
  description: null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null | string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
type WebhookPayloadPullRequestPullRequestBaseUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestPullRequestBase = {
  /**
   * "xihuanhh:master"
   */
  label: string;
  /**
   * "master"
   */
  ref: string;
  /**
   * "5fda993d395c095e69e57625a384160ad26d26e3"
   */
  sha: string;
  user: WebhookPayloadPullRequestPullRequestBaseUser;
  repo: WebhookPayloadPullRequestPullRequestBaseRepo;
};
type WebhookPayloadPullRequestPullRequestHeadRepoOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestPullRequestHeadRepo = {
  /**
   * 35196149
   */
  id: number;
  /**
   * MDEwOlJlcG9zaXRvcnkzNTE5NjE0OQ
   */
  node_id: string;
  /**
   * test
   */
  name: string;
  /**
   * "xihuanhh/test"
   */
  full_name: string;
  /**
   * false
   */
  private: boolean;
  owner: WebhookPayloadPullRequestPullRequestHeadRepoOwner;
  html_url: string;
  description: null;
  fork: boolean;
  /**
   * "https://api.github.com/repos/xihuanhh/test"
   */
  url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/forks"
   */
  forks_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/keys{/key_id}"
   */
  keys_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/collaborators{/collaborator}"
   */
  collaborators_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/teams"
   */
  teams_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/hooks"
   */
  hooks_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/events{/number}"
   */
  issue_events_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/events"
   */
  events_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/assignees{/user}"
   */
  assignees_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/branches{/branch}"
   */
  branches_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/tags"
   */
  tags_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/blobs{/sha}"
   */
  blobs_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/tags{/sha}"
   */
  git_tags_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/refs{/sha}"
   */
  git_refs_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/trees{/sha}"
   */
  trees_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/statuses/{sha}"
   */
  statuses_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/languages"
   */
  languages_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/stargazers"
   */
  stargazers_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/contributors"
   */
  contributors_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/subscribers"
   */
  subscribers_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/subscription"
   */
  subscription_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/commits{/sha}"
   */
  commits_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/commits{/sha}"
   */
  git_commits_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/comments{/number}"
   */
  comments_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/comments{/number}"
   */
  issue_comment_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/contents/{+path}"
   */
  contents_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/compare/{base}...{head}"
   */
  compare_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/merges"
   */
  merges_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/{archive_format}{/ref}"
   */
  archive_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/downloads"
   */
  downloads_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues{/number}"
   */
  issues_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/pulls{/number}"
   */
  pulls_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/milestones{/number}"
   */
  milestones_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/notifications{?since,all,participating}"
   */
  notifications_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/labels{/name}"
   */
  labels_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/releases{/id}"
   */
  releases_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/deployments"
   */
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  /**
   * "git@github.com:xihuanhh/test.git"
   */
  ssh_url: string;
  /**
   * "https://github.com/xihuanhh/test.git"
   */
  clone_url: string;
  /**
   * "https://github.com/xihuanhh/test"
   */
  svn_url: string;
  homepage: null;
  size: number;
  /**
   * 1
   */
  stargazers_count: number;
  /**
   * 1
   */
  watchers_count: number;
  language: null | string;
  has_issues: boolean;
  /**
   * true
   */
  has_projects: boolean;
  /**
   * true
   */
  has_downloads: boolean;
  /**
   * false
   */
  has_wiki: boolean;
  /**
   * false
   */
  has_pages: boolean;
  /**
   * 0
   */
  forks_count: number;
  /**
   * ""
   */
  mirror_url: null;
  /**
   * true
   */
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  /**
   * null
   */
  license: null;
  /**
   * 0
   */
  forks: number;
  /**
   * 0
   */
  open_issues: number;
  /**
   * 0
   */
  watchers: number;
  /**
   * master
   */
  default_branch: string;
};
type WebhookPayloadPullRequestPullRequestHeadUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestPullRequestHead = {
  /**
   * "xihuanhh:dev"
   */
  label: string;
  /**
   * "dev"
   */
  ref: string;
  /**
   * "d65f454953f8c08e4e37ad32ef6f14e93223c916"
   */
  sha: string;
  user: WebhookPayloadPullRequestPullRequestHeadUser;
  repo: WebhookPayloadPullRequestPullRequestHeadRepo;
};
type WebhookPayloadPullRequestPullRequestUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPullRequestPullRequest = {
  /**
   * "https://api.github.com/repos/xihuanhh/test/pulls/5",
   */
  url: string;
  /**
   * 430784412
   */
  id: number;
  /**
   * "MDExOlB1bGxSZXF1ZXN0NDMwNzg0NDEy"
   */
  node_id: string;
  /**
   * "https://github.com/xihuanhh/test/pull/5",
   */
  html_url: string;
  /**
   * "https://github.com/xihuanhh/test/pull/5.diff",
   */
  diff_url: string;
  /**
   * "https://github.com/xihuanhh/test/pull/5.patch",
   */
  patch_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/5",
   */
  issue_url: string;
  /**
   * 5
   */
  number: number;
  /**
   *  "open"
   */
  state: string;
  /**
   * false
   */
  locked: boolean;
  /**
   * "Dev"
   */
  title: string;
  /**
   *
   */
  user: WebhookPayloadPullRequestPullRequestUser;
  /**
   * "测试pr\r\n"
   */
  body: string;
  /**
   * "2020-06-08T06:06:21Z"
   */
  created_at: string;
  /**
   * "2020-06-08T06:06:21Z"
   */
  updated_at: string;
  /**
   * "2020-06-08T06:06:21Z"
   */
  closed_at: null | string;
  /**
   * "2020-06-08T06:06:21Z"
   */
  merged_at: null;
  /**
   * null
   */
  merge_commit_sha: null | string;
  assignee: WebhookPayloadPullRequestPullRequestAssignee;
  assignees: Array<WebhookPayloadPullRequestPullRequestAssigneesItem>;
  requested_reviewers: Array<any>;
  requested_teams: Array<any>;
  labels: Array<WebhookPayloadPullRequestPullRequestLabelsItem>;
  milestone: WebhookPayloadPullRequestPullRequestMilestone;
  /**
   * "https://api.github.com/repos/xihuanhh/test/pulls/5/commits"
   */
  commits_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/pulls/5/comments",
   */
  review_comments_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/pulls/comments{/number}",
   */
  review_comment_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/5/comments",
   */
  comments_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/statuses/d65f454953f8c08e4e37ad32ef6f14e93223c916",
   */
  statuses_url: string;
  head: WebhookPayloadPullRequestPullRequestHead;
  base: WebhookPayloadPullRequestPullRequestBase;
  /**
   *
   */
  _links: WebhookPayloadPullRequestPullRequestLinks;
  /**
   *
   */
  author_association: string;
  /**
   *
   */
  draft: boolean;
  /**
   *
   */
  merged: boolean;
  /**
   *
   */
  mergeable: null | boolean;
  /**
   *
   */
  rebaseable: null | boolean;
  /**
   *
   */
  mergeable_state: string;
  /**
   *
   */
  merged_by: null;
  /**
   *
   */
  comments: number;
  /**
   *
   */
  review_comments: number;
  /**
   *
   */
  maintainer_can_modify: boolean;
  /**
   *
   */
  commits: number;
  /**
   *
   */
  additions: number;
  /**
   *
   */
  deletions: number;
  /**
   *
   */
  changed_files: number;
};
export type WebhookPayloadPullRequest = {
  /**
   * 表示pullRequest的状态
   * opened, closed, reopened, edited, assigned, unassigned, review requested, review request removed, labeled,
   * unlabeled, synchronized, ready for review, converted to draft, locked, or unlocked.
   */
  action: string;
  /**
   * pr的编号
   *
   * 5
   */
  number: number;
  /**
   * pr的详细信息
   */
  pull_request: WebhookPayloadPullRequestPullRequest;
  /**
   * 仓库的信息
   */
  repository: PayloadRepository;
  /**
   * 操作人信息
   */
  sender: WebhookPayloadPullRequestSender;
  /**
   * 被指向人信息
   */
  assignee?: WebhookPayloadPullRequestAssignee;
  /**
   * 标签
   */
  label?: WebhookPayloadPullRequestLabel;
};
type WebhookPayloadPublicSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPublic = {
  repository: PayloadRepository;
  sender: WebhookPayloadPublicSender;
};
type WebhookPayloadProjectSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadProjectProjectCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadProjectProject = {
  owner_url: string;
  url: string;
  html_url: string;
  columns_url: string;
  id: number;
  node_id: string;
  name: string;
  body: string;
  number: number;
  state: string;
  creator: WebhookPayloadProjectProjectCreator;
  created_at: string;
  updated_at: string;
};
type WebhookPayloadProject = {
  action: string;
  project: WebhookPayloadProjectProject;
  repository: PayloadRepository;
  sender: WebhookPayloadProjectSender;
};
type WebhookPayloadProjectColumnSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadProjectColumnProjectColumn = {
  url: string;
  project_url: string;
  cards_url: string;
  id: number;
  node_id: string;
  name: string;
  created_at: string;
  updated_at: string;
};
type WebhookPayloadProjectColumn = {
  action: string;
  project_column: WebhookPayloadProjectColumnProjectColumn;
  repository: PayloadRepository;
  sender: WebhookPayloadProjectColumnSender;
};
type WebhookPayloadProjectCardSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadProjectCardProjectCardCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadProjectCardProjectCard = {
  url: string;
  project_url: string;
  column_url: string;
  column_id: number;
  id: number;
  node_id: string;
  note: string;
  archived: boolean;
  creator: WebhookPayloadProjectCardProjectCardCreator;
  created_at: string;
  updated_at: string;
};
type WebhookPayloadProjectCard = {
  action: string;
  project_card: WebhookPayloadProjectCardProjectCard;
  repository: PayloadRepository;
  sender: WebhookPayloadProjectCardSender;
};
type WebhookPayloadPageBuildSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPageBuildBuildPusher = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPageBuildBuildError = { message: null };
type WebhookPayloadPageBuildBuild = {
  url: string;
  status: string;
  error: WebhookPayloadPageBuildBuildError;
  pusher: WebhookPayloadPageBuildBuildPusher;
  commit: string;
  duration: number;
  created_at: string;
  updated_at: string;
};
type WebhookPayloadPageBuild = {
  id: number;
  build: WebhookPayloadPageBuildBuild;
  repository: PayloadRepository;
  sender: WebhookPayloadPageBuildSender;
};
type WebhookPayloadPackageSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPackagePackageRegistry = {
  about_url: string;
  name: string;
  type: string;
  url: string;
  vendor: string;
};
type WebhookPayloadPackagePackagePackageVersionAuthor = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPackagePackagePackageVersionPackageFilesItem = {
  download_url: string;
  id: number;
  name: string;
  sha256: string;
  sha1: string;
  md5: string;
  content_type: string;
  state: string;
  size: number;
  created_at: string;
  updated_at: string;
};
type WebhookPayloadPackagePackagePackageVersionReleaseAuthor = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPackagePackagePackageVersionRelease = {
  url: string;
  html_url: string;
  id: number;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  author: WebhookPayloadPackagePackagePackageVersionReleaseAuthor;
  prerelease: boolean;
  created_at: string;
  published_at: string;
};
type WebhookPayloadPackagePackagePackageVersion = {
  id: number;
  version: string;
  summary: string;
  body: string;
  body_html: string;
  release: WebhookPayloadPackagePackagePackageVersionRelease;
  manifest: string;
  html_url: string;
  tag_name: string;
  target_commitish: string;
  target_oid: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  updated_at: string;
  metadata: Array<any>;
  package_files: Array<WebhookPayloadPackagePackagePackageVersionPackageFilesItem>;
  author: WebhookPayloadPackagePackagePackageVersionAuthor;
  installation_command: string;
};
type WebhookPayloadPackagePackageOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadPackagePackage = {
  id: number;
  name: string;
  package_type: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  owner: WebhookPayloadPackagePackageOwner;
  package_version: WebhookPayloadPackagePackagePackageVersion;
  registry: WebhookPayloadPackagePackageRegistry;
};
type WebhookPayloadPackage = {
  action: string;
  package: WebhookPayloadPackagePackage;
  repository: PayloadRepository;
  sender: WebhookPayloadPackageSender;
};
type WebhookPayloadOrgBlockSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadOrgBlockOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type WebhookPayloadOrgBlockBlockedUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadOrgBlock = {
  action: string;
  blocked_user: WebhookPayloadOrgBlockBlockedUser;
  organization: WebhookPayloadOrgBlockOrganization;
  sender: WebhookPayloadOrgBlockSender;
};
type WebhookPayloadOrganizationSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadOrganizationOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type WebhookPayloadOrganizationMembershipUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadOrganizationMembership = {
  url: string;
  state: string;
  role: string;
  organization_url: string;
  user: WebhookPayloadOrganizationMembershipUser;
};
type WebhookPayloadOrganization = {
  action: string;
  membership: WebhookPayloadOrganizationMembership;
  organization: WebhookPayloadOrganizationOrganization;
  sender: WebhookPayloadOrganizationSender;
};
type WebhookPayloadMilestoneSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadMilestoneMilestoneCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadMilestoneMilestone = {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  description: string;
  creator: WebhookPayloadMilestoneMilestoneCreator;
  open_issues: number;
  closed_issues: number;
  state: string;
  created_at: string;
  updated_at: string;
  due_on: string;
  closed_at: null | string;
};
type WebhookPayloadMilestone = {
  action: string;
  milestone: WebhookPayloadMilestoneMilestone;
  repository: PayloadRepository;
  sender: WebhookPayloadMilestoneSender;
};
type WebhookPayloadMetaSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadMetaHookConfig = {
  content_type: string;
  insecure_ssl: string;
  url: string;
};
type WebhookPayloadMetaHook = {
  type: string;
  id: number;
  name: string;
  active: boolean;
  events: Array<string>;
  config: WebhookPayloadMetaHookConfig;
  updated_at: string;
  created_at: string;
};
type WebhookPayloadMeta = {
  action: string;
  hook_id: number;
  hook: WebhookPayloadMetaHook;
  repository: PayloadRepository;
  sender: WebhookPayloadMetaSender;
};
type WebhookPayloadMembershipOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type WebhookPayloadMembershipTeam = {
  name: string;
  id: number;
  node_id: string;
  slug: string;
  description: string;
  privacy: string;
  url: string;
  html_url: string;
  members_url: string;
  repositories_url: string;
  permission: string;
};
type WebhookPayloadMembershipSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadMembershipMember = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadMembership = {
  action: string;
  scope: string;
  member: WebhookPayloadMembershipMember;
  sender: WebhookPayloadMembershipSender;
  team: WebhookPayloadMembershipTeam;
  organization: WebhookPayloadMembershipOrganization;
};
type WebhookPayloadMemberChangesPermission = { from: string };
type WebhookPayloadMemberChanges = {
  permission: WebhookPayloadMemberChangesPermission;
};
type WebhookPayloadMemberSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadMemberMember = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadMember = {
  action: string;
  member: WebhookPayloadMemberMember;
  repository: PayloadRepository;
  sender: WebhookPayloadMemberSender;
  changes?: WebhookPayloadMemberChanges;
};
type WebhookPayloadMarketplacePurchasePreviousMarketplacePurchasePlan = {
  id: number;
  name: string;
  description: string;
  monthly_price_in_cents: number;
  yearly_price_in_cents: number;
  price_model: string;
  has_free_trial: boolean;
  unit_name: string;
  bullets: Array<string>;
};
type WebhookPayloadMarketplacePurchasePreviousMarketplacePurchaseAccount = {
  type: string;
  id: number;
  login: string;
  organization_billing_email: string;
};
type WebhookPayloadMarketplacePurchasePreviousMarketplacePurchase = {
  account: WebhookPayloadMarketplacePurchasePreviousMarketplacePurchaseAccount;
  billing_cycle: string;
  on_free_trial: boolean;
  free_trial_ends_on: null;
  unit_count: number;
  plan: WebhookPayloadMarketplacePurchasePreviousMarketplacePurchasePlan;
};
type WebhookPayloadMarketplacePurchaseMarketplacePurchasePlan = {
  id: number;
  name: string;
  description: string;
  monthly_price_in_cents: number;
  yearly_price_in_cents: number;
  price_model: string;
  has_free_trial: boolean;
  unit_name: string | null;
  bullets: Array<string>;
};
type WebhookPayloadMarketplacePurchaseMarketplacePurchaseAccount = {
  type: string;
  id: number;
  login: string;
  organization_billing_email: string;
};
type WebhookPayloadMarketplacePurchaseMarketplacePurchase = {
  account: WebhookPayloadMarketplacePurchaseMarketplacePurchaseAccount;
  billing_cycle: string;
  unit_count: number;
  on_free_trial: boolean;
  free_trial_ends_on: null;
  next_billing_date: string;
  plan: WebhookPayloadMarketplacePurchaseMarketplacePurchasePlan;
};
type WebhookPayloadMarketplacePurchaseSender = {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  email: string;
};
type WebhookPayloadMarketplacePurchase = {
  action: string;
  effective_date: string;
  sender: WebhookPayloadMarketplacePurchaseSender;
  marketplace_purchase: WebhookPayloadMarketplacePurchaseMarketplacePurchase;
  previous_marketplace_purchase?: WebhookPayloadMarketplacePurchasePreviousMarketplacePurchase;
};
type WebhookPayloadLabelChangesColor = { from: string };
type WebhookPayloadLabelChanges = { color: WebhookPayloadLabelChangesColor };
type WebhookPayloadLabelSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadLabelLabel = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
};
type WebhookPayloadLabel = {
  action: string;
  label: WebhookPayloadLabelLabel;
  repository: PayloadRepository;
  sender: WebhookPayloadLabelSender;
  changes?: WebhookPayloadLabelChanges;
};
type WebhookPayloadIssuesLabel = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
};
type WebhookPayloadIssuesIssuePullRequest = {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
};
type WebhookPayloadIssuesAssignee = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadIssuesSender = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadIssuesChanges = {};
type WebhookPayloadIssuesIssueMilestoneCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadIssuesIssueMilestone = {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  description: string;
  creator: WebhookPayloadIssuesIssueMilestoneCreator;
  open_issues: number;
  closed_issues: number;
  state: string;
  created_at: string;
  updated_at: string;
  due_on: string;
  closed_at: string;
} | null;
type WebhookPayloadIssuesIssueAssigneesItem = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadIssuesIssueAssignee = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
} | null;
type WebhookPayloadIssuesIssueLabelsItem = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
};
type WebhookPayloadIssuesIssueUser = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadIssuesIssue = {
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2"
   */
  url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test"
   */
  repository_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2/labels{/name}"
   */
  labels_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2/comments"
   */
  comments_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2/events"
   */
  events_url: string;
  /**
   * "https://github.com/xihuanhh/test/issues/2"
   */
  html_url: string;
  /**
   * 631354156
   */
  id: number;
  /**
   * "MDU6SXNzdWU2MzEzNTQxNTY"
   */
  node_id: string;
  /**
   * 2
   */
  number: number;
  /**
   * "test 23434"
   */
  title: string;

  user: WebhookPayloadIssuesIssueUser;
  labels: Array<WebhookPayloadIssuesIssueLabelsItem>;
  /**
   * "open"
   */
  state: string;
  /**
   * false
   */
  locked: boolean;

  assignee: WebhookPayloadIssuesIssueAssignee;
  assignees: Array<WebhookPayloadIssuesIssueAssigneesItem>;
  milestone: WebhookPayloadIssuesIssueMilestone;
  /**
   * 0
   */
  comments: number;
  /**
   * "2020-06-05T06:46:35Z"
   */
  created_at: string;
  /**
   * "2020-06-05T06:57:12Z"
   */
  updated_at: string;
  /**
   * "null"
   */
  closed_at: string;
  /**
   * "OWNER"
   */
  author_association: string;
  /**
   * "this is test 2"
   */
  body: string;
  pull_request?: WebhookPayloadIssuesIssuePullRequest;
};
export type WebhookPayloadIssues = {
  /**
   * 表示issue的状态
   * opened, edited, deleted, transferred, pinned, unpinned, closed, reopened,
   * assigned, unassigned, labeled, unlabeled, milestoned, demilestoned, locked, or unlocked.
   *
   */
  action: string;
  /**
   * 该issue的所有信息
   * 包括 标题、编号、url、内容 等等
   */
  issue: WebhookPayloadIssuesIssue;
  /**
   * issue 属性发生的变动
   * 例如 issue的标题 title 从  "test 1 到 test 2"
   * "title": {
      "from": "test 1"
      }
    */
  changes?: WebhookPayloadIssuesChanges;
  /**
   * 仓库的所有信息
   */
  repository: PayloadRepository;
  /**
   * 提交人的信息
   */
  sender: WebhookPayloadIssuesSender;
  /**
   * 指定谁谁来操作，这个不重要
   */
  assignee?: WebhookPayloadIssuesAssignee;
  /**
   * issue的标签
   */
  label?: WebhookPayloadIssuesLabel;
  /**
   * githubApp的install信息
   */
  installation?: WebhookPayloadInstallation;
};
type WebhookPayloadIssueCommentChangesBody = { from: string };
type WebhookPayloadIssueCommentChanges = {
  body: WebhookPayloadIssueCommentChangesBody;
};
type WebhookPayloadIssueCommentSender = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadIssueCommentCommentUser = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadIssueCommentComment = {
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/comments/639303920",
   */
  url: string;
  /**
   * "https://github.com/xihuanhh/test/issues/2#issuecomment-639303920",
   */
  html_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2",
   */
  issue_url: string;
  /**
   * 639303920
   */
  id: number;
  /**
   * "MDEyOklzc3VlQ29tbWVudDYzOTMwMzkyMA"
   */
  node_id: string;

  user: WebhookPayloadIssueCommentCommentUser;
  /**
   * "2020-06-05T07:17:13Z"
   */
  created_at: string;
  /**
   * "2020-06-05T07:17:13Z"
   */
  updated_at: string;
  /**
   * "OWNER"
   */
  author_association: string;
  /**
   * issue 评论的实际内容
   */
  body: string;
};
type WebhookPayloadIssueCommentIssueMilestoneCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadIssueCommentIssueMilestone = {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  description: string;
  creator: WebhookPayloadIssueCommentIssueMilestoneCreator;
  open_issues: number;
  closed_issues: number;
  state: string;
  created_at: string;
  updated_at: string;
  due_on: string;
  closed_at: string;
};
type WebhookPayloadIssueCommentIssueAssigneesItem = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadIssueCommentIssueAssignee = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadIssueCommentIssueLabelsItem = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
};
type WebhookPayloadIssueCommentIssueUser = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type WebhookPayloadIssueCommentIssue = {
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2"
   */
  url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test",
   */
  repository_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2/labels{/name}",
   */
  labels_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2/comments",
   */
  comments_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/2/events"
   */
  events_url: string;
  /**
   * "https://github.com/xihuanhh/test/issues/2"
   */
  html_url: string;
  /**
   * 631354156
   */
  id: number;
  /**
   * "MDU6SXNzdWU2MzEzNTQxNTY"
   */
  node_id: string;
  /**
   * issue的编号(显示在页面上的编号，不是内部编号)
   */
  number: number;
  /**
   * "test 23"
   */
  title: string;

  user: WebhookPayloadIssueCommentIssueUser;
  labels: Array<WebhookPayloadIssueCommentIssueLabelsItem>;
  /**
   * "open"
   */
  state: string;
  locked: boolean;
  assignee: WebhookPayloadIssueCommentIssueAssignee;
  assignees: Array<WebhookPayloadIssueCommentIssueAssigneesItem>;
  milestone: WebhookPayloadIssueCommentIssueMilestone;
  /**
   *  1
   */
  comments: number;
  /**
   * "2020-06-05T06:46:35Z",
   */
  created_at: string;
  /**
   * "2020-06-05T06:46:35Z",
   */
  updated_at: string;
  /**
   * null
   */
  closed_at: null;
  /**
   * "OWNER"
   */
  author_association: string;
  /**
   * "this is test 2"
   */
  body: string;
};
export type WebhookPayloadIssueComment = {
  /**
   * 表示issueComment的状态
   * created, edited, or deleted
   */
  action: string;
  /**
   * issue的所有信息
   */
  issue: WebhookPayloadIssueCommentIssue;
  /**
   * comment的所有信息
   */
  comment: WebhookPayloadIssueCommentComment;
  /**
   * 仓库的所有信息
   */
  repository: PayloadRepository;
  /**
   * 发送人的所有信息
   */
  sender: WebhookPayloadIssueCommentSender;
  /**
   * issueComment的改动记录
   * 例如 内容从  "test 1 到 test 2"
   * "body": {
      "from": "test 1"
      }
    */
  changes?: WebhookPayloadIssueCommentChanges;
};
type WebhookPayloadInstallationRepositoriesRepositoriesRemovedItem = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
};
type WebhookPayloadInstallationRepositoriesSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadInstallationRepositoriesRepositoriesAddedItem = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
};
type WebhookPayloadInstallationRepositoriesInstallationPermissions = {
  administration?: string;
  statuses?: string;
  repository_projects?: string;
  repository_hooks?: string;
  pull_requests?: string;
  pages?: string;
  issues: string;
  deployments?: string;
  contents: string;
  checks?: string;
  metadata: string;
  vulnerability_alerts?: string;
};
type WebhookPayloadInstallationRepositoriesInstallationAccount = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadInstallationRepositoriesInstallation = {
  id: number;
  account: WebhookPayloadInstallationRepositoriesInstallationAccount;
  repository_selection: string;
  access_tokens_url: string;
  repositories_url: string;
  html_url: string;
  app_id: number;
  target_id: number;
  target_type: string;
  permissions: WebhookPayloadInstallationRepositoriesInstallationPermissions;
  events: Array<string>;
  created_at: number;
  updated_at: number;
  single_file_name: null | string;
};
type WebhookPayloadInstallationRepositories = {
  action: string;
  installation: WebhookPayloadInstallationRepositoriesInstallation;
  repository_selection: string;
  repositories_added: Array<WebhookPayloadInstallationRepositoriesRepositoriesAddedItem>;
  repositories_removed: Array<WebhookPayloadInstallationRepositoriesRepositoriesRemovedItem>;
  sender: WebhookPayloadInstallationRepositoriesSender;
};
type WebhookPayloadInstallationSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadInstallationRepositoriesItem = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
};
type WebhookPayloadInstallationInstallationPermissions = {
  metadata: string;
  contents: string;
  issues: string;
  administration?: string;
  checks?: string;
  deployments?: string;
  pages?: string;
  pull_requests?: string;
  repository_hooks?: string;
  repository_projects?: string;
  statuses?: string;
  vulnerability_alerts?: string;
};
type WebhookPayloadInstallationInstallationAccount = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadInstallationInstallation = {
  id: number;
  account: WebhookPayloadInstallationInstallationAccount;
  repository_selection: string;
  access_tokens_url: string;
  repositories_url: string;
  html_url: string;
  app_id: number;
  target_id: number;
  target_type: string;
  permissions: WebhookPayloadInstallationInstallationPermissions;
  events: Array<string>;
  created_at: number;
  updated_at: number;
  single_file_name: string | null;
};
type WebhookPayloadInstallation = {
  action: string;
  installation: WebhookPayloadInstallationInstallation;
  repositories: Array<WebhookPayloadInstallationRepositoriesItem>;
  sender: WebhookPayloadInstallationSender;
};
type WebhookPayloadGollumSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadGollumPagesItem = {
  page_name: string;
  title: string;
  summary: null;
  action: string;
  sha: string;
  html_url: string;
};
type WebhookPayloadGollum = {
  pages: Array<WebhookPayloadGollumPagesItem>;
  repository: PayloadRepository;
  sender: WebhookPayloadGollumSender;
};
type WebhookPayloadGithubAppAuthorizationSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadGithubAppAuthorization = {
  action: string;
  sender: WebhookPayloadGithubAppAuthorizationSender;
};
type WebhookPayloadForkSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadForkForkeeOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadForkForkee = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: WebhookPayloadForkForkeeOwner;
  html_url: string;
  description: null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  public: boolean;
};
type WebhookPayloadFork = {
  forkee: WebhookPayloadForkForkee;
  repository: PayloadRepository;
  sender: WebhookPayloadForkSender;
};
type WebhookPayloadDeploymentStatusSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadDeploymentStatusDeploymentCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadDeploymentStatusDeploymentPayload = {};
type WebhookPayloadDeploymentStatusDeployment = {
  url: string;
  id: number;
  node_id: string;
  sha: string;
  ref: string;
  task: string;
  payload: WebhookPayloadDeploymentStatusDeploymentPayload;
  original_environment: string;
  environment: string;
  description: null;
  creator: WebhookPayloadDeploymentStatusDeploymentCreator;
  created_at: string;
  updated_at: string;
  statuses_url: string;
  repository_url: string;
};
type WebhookPayloadDeploymentStatusDeploymentStatusCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadDeploymentStatusDeploymentStatus = {
  url: string;
  id: number;
  node_id: string;
  state: string;
  creator: WebhookPayloadDeploymentStatusDeploymentStatusCreator;
  description: string;
  environment: string;
  target_url: string;
  created_at: string;
  updated_at: string;
  deployment_url: string;
  repository_url: string;
};
type WebhookPayloadDeploymentStatus = {
  action: string;
  deployment_status: WebhookPayloadDeploymentStatusDeploymentStatus;
  deployment: WebhookPayloadDeploymentStatusDeployment;
  repository: PayloadRepository;
  sender: WebhookPayloadDeploymentStatusSender;
};
type WebhookPayloadDeploymentSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadDeploymentDeploymentCreator = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadDeploymentDeploymentPayload = {};
type WebhookPayloadDeploymentDeployment = {
  url: string;
  id: number;
  node_id: string;
  sha: string;
  ref: string;
  task: string;
  payload: WebhookPayloadDeploymentDeploymentPayload;
  original_environment: string;
  environment: string;
  description: null;
  creator: WebhookPayloadDeploymentDeploymentCreator;
  created_at: string;
  updated_at: string;
  statuses_url: string;
  repository_url: string;
};
type WebhookPayloadDeployment = {
  action: string;
  deployment: WebhookPayloadDeploymentDeployment;
  repository: PayloadRepository;
  sender: WebhookPayloadDeploymentSender;
};
type WebhookPayloadDeployKeySender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadDeployKeyKey = {
  id: number;
  key: string;
  url: string;
  title: string;
  verified: boolean;
  created_at: string;
  read_only: boolean;
};
type WebhookPayloadDeployKey = {
  action: string;
  key: WebhookPayloadDeployKeyKey;
  repository: PayloadRepository;
  sender: WebhookPayloadDeployKeySender;
};
type WebhookPayloadDeleteSender = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
/**
 * 该事件表示github端有人直接删除了分支、tag等
 */
export type WebhookPayloadDelete = {
  /**
   * 分支名、tag名等
   * 例如: "test1"
   */
  ref: string;
  /**
   * 类型
   * 例如分支: "branch"
   */
  ref_type: string;
  /**
   * 推送或者说是创建人的类型
   * 有可能是机器人
   * 例如 "user" 或者 "bot"
   */
  pusher_type: string;
  /**
   * 仓库信息
   */
  repository: PayloadRepository;
  /**
   * 删除人信息
   */
  sender: WebhookPayloadDeleteSender;
};
type WebhookPayloadCreateSender = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
/**
 * 该事件表示github端有人直接创建了新的分支、tag等
 */
export type WebhookPayloadCreate = {
  /**
   * 分支名、tag名等
   * 例如: "test1"
   */
  ref: string;
  /**
   * 类型
   * 例如分支: "branch"
   */
  ref_type: string;
  /**
   * master分支
   *
   * "master"
   */
  master_branch: string;
  /**
   * "test repository"
   */
  description: string;
  /**
   * 推送或者说是创建人的类型
   * 有可能是机器人
   * 例如 "user" 或者 "bot"
   */
  pusher_type: string;
  /**
   * 仓库信息
   */
  repository: PayloadRepository;
  /**
   * 创建人信息
   */
  sender: WebhookPayloadCreateSender;
};
type WebhookPayloadContentReferenceInstallation = {
  id: number;
  node_id: string;
};
type WebhookPayloadContentReferenceSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadContentReferenceContentReference = {
  id: number;
  node_id: string;
  reference: string;
};
type WebhookPayloadContentReference = {
  action: string;
  content_reference: WebhookPayloadContentReferenceContentReference;
  repository: PayloadRepository;
  sender: WebhookPayloadContentReferenceSender;
  installation: WebhookPayloadContentReferenceInstallation;
};
type WebhookPayloadCommitCommentSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadCommitCommentCommentUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadCommitCommentComment = {
  url: string;
  html_url: string;
  id: number;
  node_id: string;
  user: WebhookPayloadCommitCommentCommentUser;
  position: null;
  line: null;
  path: null;
  commit_id: string;
  created_at: string;
  updated_at: string;
  author_association: string;
  body: string;
};
type WebhookPayloadCommitComment = {
  action: string;
  comment: WebhookPayloadCommitCommentComment;
  repository: PayloadRepository;
  sender: WebhookPayloadCommitCommentSender;
};
type WebhookPayloadCheckSuiteInstallation = { id: number; node_id: string };
type WebhookPayloadCheckSuiteSender = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadCheckSuiteCheckSuiteHeadCommitCommitter = {
  name: string;
  email: string;
};
type WebhookPayloadCheckSuiteCheckSuiteHeadCommitAuthor = {
  name: string;
  email: string;
};
type WebhookPayloadCheckSuiteCheckSuiteHeadCommit = {
  id: string;
  tree_id: string;
  message: string;
  timestamp: string;
  author: WebhookPayloadCheckSuiteCheckSuiteHeadCommitAuthor;
  committer: WebhookPayloadCheckSuiteCheckSuiteHeadCommitCommitter;
};
type WebhookPayloadCheckSuiteCheckSuiteAppPermissions = {
  administration: string;
  checks: string;
  contents: string;
  deployments: string;
  issues: string;
  members: string;
  metadata: string;
  organization_administration: string;
  organization_hooks: string;
  organization_plan: string;
  organization_projects: string;
  organization_user_blocking: string;
  pages: string;
  pull_requests: string;
  repository_hooks: string;
  repository_projects: string;
  statuses: string;
  team_discussions: string;
  vulnerability_alerts: string;
};
type WebhookPayloadCheckSuiteCheckSuiteAppOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadCheckSuiteCheckSuiteApp = {
  id: number;
  node_id: string;
  owner: WebhookPayloadCheckSuiteCheckSuiteAppOwner;
  name: string;
  description: string;
  external_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  permissions: WebhookPayloadCheckSuiteCheckSuiteAppPermissions;
  events: Array<any>;
};
type WebhookPayloadCheckSuiteCheckSuitePullRequestsItemBaseRepo = {
  id: number;
  url: string;
  name: string;
};
type WebhookPayloadCheckSuiteCheckSuitePullRequestsItemBase = {
  ref: string;
  sha: string;
  repo: WebhookPayloadCheckSuiteCheckSuitePullRequestsItemBaseRepo;
};
type WebhookPayloadCheckSuiteCheckSuitePullRequestsItemHeadRepo = {
  id: number;
  url: string;
  name: string;
};
type WebhookPayloadCheckSuiteCheckSuitePullRequestsItemHead = {
  ref: string;
  sha: string;
  repo: WebhookPayloadCheckSuiteCheckSuitePullRequestsItemHeadRepo;
};
type WebhookPayloadCheckSuiteCheckSuitePullRequestsItem = {
  url: string;
  id: number;
  number: number;
  head: WebhookPayloadCheckSuiteCheckSuitePullRequestsItemHead;
  base: WebhookPayloadCheckSuiteCheckSuitePullRequestsItemBase;
};
type WebhookPayloadCheckSuiteCheckSuite = {
  id: number;
  node_id: string;
  head_branch: string;
  head_sha: string;
  status: string;
  conclusion: string | null;
  url: string;
  before: string;
  after: string;
  pull_requests: Array<WebhookPayloadCheckSuiteCheckSuitePullRequestsItem>;
  app: WebhookPayloadCheckSuiteCheckSuiteApp;
  created_at: string;
  updated_at: string;
  latest_check_runs_count: number;
  check_runs_url: string;
  head_commit: WebhookPayloadCheckSuiteCheckSuiteHeadCommit;
};
type WebhookPayloadCheckSuite = {
  action: string;
  check_suite: WebhookPayloadCheckSuiteCheckSuite;
  repository: PayloadRepository;
  sender: WebhookPayloadCheckSuiteSender;
  installation?: WebhookPayloadCheckSuiteInstallation;
};
type WebhookPayloadCheckRunInstallation = { id: number };
type WebhookPayloadCheckRunOrganization = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
};
type WebhookPayloadCheckRunSender = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
};
type PayloadRepositoryOwner = {
  /**
   * xihuanhh
   */
  login: string;
  /**
   * 7556082
   */
  id: number;
  /**
   * "MDQ6VXNlcjc1NTYwODI"
   */
  node_id: string;
  /**
   * https://avatars1.githubusercontent.com/u/7556082?v=4
   */
  avatar_url: string;
  /**
   * ""
   */
  gravatar_id: string;
  /**
   * "https://api.github.com/users/xihuanhh"
   */
  url: string;
  /**
   * "https://github.com/xihuanhh"
   */
  html_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/followers"
   */
  followers_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/following{/other_user}"
   */
  following_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/subscriptions"
   */
  subscriptions_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/orgs"
   */
  organizations_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/repos"
   */
  repos_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/events{/privacy}"
   */
  events_url: string;
  /**
   * "https://api.github.com/users/xihuanhh/received_events"
   */
  received_events_url: string;
  /**
   * "User"
   */
  type: string;
  /**
   * false
   */
  site_admin: boolean;
  name?: string;
  email?: string;
};
type PayloadRepository = {
  /**
   * 35196149
   */
  id: number;
  /**
   * MDEwOlJlcG9zaXRvcnkzNTE5NjE0OQ
   */
  node_id: string;
  /**
   * test
   */
  name: string;
  /**
   * "xihuanhh/test"
   */
  full_name: string;
  /**
   * false
   */
  private: boolean;

  owner: PayloadRepositoryOwner;
  /**
   * "https://github.com/xihuanhh/test"
   */
  html_url: string;
  /**
   * "test repository"
   */
  description: null | string;
  /**
   * false
   */
  fork: boolean;
  /**
   * "https://api.github.com/repos/xihuanhh/test"
   */
  url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/forks"
   */
  forks_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/keys{/key_id}"
   */
  keys_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/collaborators{/collaborator}"
   */
  collaborators_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/teams"
   */
  teams_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/hooks"
   */
  hooks_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/events{/number}"
   */
  issue_events_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/events"
   */
  events_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/assignees{/user}"
   */
  assignees_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/branches{/branch}"
   */
  branches_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/tags"
   */
  tags_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/blobs{/sha}"
   */
  blobs_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/tags{/sha}"
   */
  git_tags_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/refs{/sha}"
   */
  git_refs_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/trees{/sha}"
   */
  trees_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/statuses/{sha}"
   */
  statuses_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/languages"
   */
  languages_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/stargazers"
   */
  stargazers_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/contributors"
   */
  contributors_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/subscribers"
   */
  subscribers_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/subscription"
   */
  subscription_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/commits{/sha}"
   */
  commits_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/git/commits{/sha}"
   */
  git_commits_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/comments{/number}"
   */
  comments_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues/comments{/number}"
   */
  issue_comment_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/contents/{+path}"
   */
  contents_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/compare/{base}...{head}"
   */
  compare_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/merges"
   */
  merges_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/{archive_format}{/ref}"
   */
  archive_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/downloads"
   */
  downloads_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/issues{/number}"
   */
  issues_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/pulls{/number}"
   */
  pulls_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/milestones{/number}"
   */
  milestones_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/notifications{?since,all,participating}"
   */
  notifications_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/labels{/name}"
   */
  labels_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/releases{/id}"
   */
  releases_url: string;
  /**
   * "https://api.github.com/repos/xihuanhh/test/deployments"
   */
  deployments_url: string;
  /**
   * "2015-05-07T03:14:32Z"
   */
  created_at: string | number;
  /**
   * "2015-05-07T03:14:32Z"
   */
  updated_at: string;
  /**
   * "2015-05-07T03:14:32Z"
   */
  pushed_at: string | number;
  /**
   * "git://github.com/xihuanhh/test.git"
   */
  git_url: string;
  /**
   * "git@github.com:xihuanhh/test.git"
   */
  ssh_url: string;
  /**
   * "https://github.com/xihuanhh/test.git"
   */
  clone_url: string;
  /**
   * "https://github.com/xihuanhh/test"
   */
  svn_url: string;
  /**
   * null
   */
  homepage: null | string;
  /**
   * 0
   */
  size: number;
  /**
   * 1
   */
  stargazers_count: number;
  /**
   * 1
   */
  watchers_count: number;
  /**
   * null
   */
  language: string | null;
  /**
   * true
   */
  has_issues: boolean;
  /**
   * true
   */
  has_projects: boolean;
  /**
   * true
   */
  has_downloads: boolean;
  /**
   * false
   */
  has_wiki: boolean;
  /**
   * false
   */
  has_pages: boolean;
  /**
   * 0
   */
  forks_count: number;
  /**
   * ""
   */
  mirror_url: null;
  /**
   * true
   */
  archived: boolean;
  /**
   * false
   */
  disabled?: boolean;
  /**
   * 0
   */
  open_issues_count: number;
  /**
   * null
   */
  license: null;
  /**
   * 0
   */
  forks: number;
  /**
   * 0
   */
  open_issues: number;
  /**
   * 0
   */
  watchers: number;
  /**
   * master
   */
  default_branch: string;
  stargazers?: number;
  master_branch?: string;
  permissions?: PayloadRepositoryPermissions;
};
type WebhookPayloadCheckRunCheckRunPullRequestsItemBaseRepo = {
  id: number;
  url: string;
  name: string;
};
type WebhookPayloadCheckRunCheckRunPullRequestsItemBase = {
  ref: string;
  sha: string;
  repo: WebhookPayloadCheckRunCheckRunPullRequestsItemBaseRepo;
};
type WebhookPayloadCheckRunCheckRunPullRequestsItemHeadRepo = {
  id: number;
  url: string;
  name: string;
};
type WebhookPayloadCheckRunCheckRunPullRequestsItemHead = {
  ref: string;
  sha: string;
  repo: WebhookPayloadCheckRunCheckRunPullRequestsItemHeadRepo;
};
type WebhookPayloadCheckRunCheckRunPullRequestsItem = {
  url: string;
  id: number;
  number: number;
  head: WebhookPayloadCheckRunCheckRunPullRequestsItemHead;
  base: WebhookPayloadCheckRunCheckRunPullRequestsItemBase;
};
type WebhookPayloadCheckRunCheckRunAppPermissions = {
  administration: string;
  checks: string;
  contents: string;
  deployments: string;
  issues: string;
  members: string;
  metadata: string;
  organization_administration: string;
  organization_hooks: string;
  organization_plan: string;
  organization_projects: string;
  organization_user_blocking: string;
  pages: string;
  pull_requests: string;
  repository_hooks: string;
  repository_projects: string;
  statuses: string;
  team_discussions: string;
  vulnerability_alerts: string;
};
type WebhookPayloadCheckRunCheckRunAppOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadCheckRunCheckRunApp = {
  id: number;
  node_id: string;
  owner: WebhookPayloadCheckRunCheckRunAppOwner;
  name: string;
  description: string | null;
  external_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  permissions?: WebhookPayloadCheckRunCheckRunAppPermissions;
  events?: Array<any>;
};
type WebhookPayloadCheckRunCheckRunCheckSuiteAppPermissions = {
  administration: string;
  checks: string;
  contents: string;
  deployments: string;
  issues: string;
  members: string;
  metadata: string;
  organization_administration: string;
  organization_hooks: string;
  organization_plan: string;
  organization_projects: string;
  organization_user_blocking: string;
  pages: string;
  pull_requests: string;
  repository_hooks: string;
  repository_projects: string;
  statuses: string;
  team_discussions: string;
  vulnerability_alerts: string;
};
type WebhookPayloadCheckRunCheckRunCheckSuiteAppOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
type WebhookPayloadCheckRunCheckRunCheckSuiteApp = {
  id: number;
  node_id: string;
  owner: WebhookPayloadCheckRunCheckRunCheckSuiteAppOwner;
  name: string;
  description: string | null;
  external_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  permissions?: WebhookPayloadCheckRunCheckRunCheckSuiteAppPermissions;
  events?: Array<any>;
};
type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemBaseRepo = {
  id: number;
  url: string;
  name: string;
};
type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemBase = {
  ref: string;
  sha: string;
  repo: WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemBaseRepo;
};
type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemHeadRepo = {
  id: number;
  url: string;
  name: string;
};
type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemHead = {
  ref: string;
  sha: string;
  repo: WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemHeadRepo;
};
type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItem = {
  url: string;
  id: number;
  number: number;
  head: WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemHead;
  base: WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemBase;
};
type WebhookPayloadCheckRunCheckRunCheckSuite = {
  id: number;
  node_id?: string;
  head_branch: string;
  head_sha: string;
  status: string;
  conclusion: null | string;
  url: string;
  before: string;
  after: string;
  pull_requests: Array<WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItem>;
  app: WebhookPayloadCheckRunCheckRunCheckSuiteApp;
  created_at: string;
  updated_at: string;
};
type WebhookPayloadCheckRunCheckRunOutput = {
  title: null | string;
  summary: null | string;
  text: null | string;
  annotations_count: number;
  annotations_url: string;
};
type WebhookPayloadCheckRunCheckRun = {
  id: number;
  node_id?: string;
  head_sha: string;
  external_id: string;
  url: string;
  html_url: string;
  details_url?: string;
  status: string;
  conclusion: null | string;
  started_at: string;
  completed_at: null | string;
  output: WebhookPayloadCheckRunCheckRunOutput;
  name: string;
  check_suite: WebhookPayloadCheckRunCheckRunCheckSuite;
  app: WebhookPayloadCheckRunCheckRunApp;
  pull_requests: Array<WebhookPayloadCheckRunCheckRunPullRequestsItem>;
};
type WebhookPayloadCheckRun = {
  action: string;
  check_run: WebhookPayloadCheckRunCheckRun;
  repository: PayloadRepository;
  sender: WebhookPayloadCheckRunSender;
  organization?: WebhookPayloadCheckRunOrganization;
  installation?: WebhookPayloadCheckRunInstallation;
};

interface WebhookEvent<T> {
  id: string;
  name: string;
  payload: T;
  protocol?: 'http' | 'https';
  host?: string;
  url?: string;
}

type EventTypeError = 'error';
type AnyEvent = '*';
type WebhookPayloadCheckRunEventTypeKeys =
  | 'check_run'
  | 'check_run.completed'
  | 'check_run.created'
  | 'check_run.requested_action'
  | 'check_run.rerequested';
type WebhookPayloadCheckSuiteEventTypeKeys =
  | 'check_suite'
  | 'check_suite.completed'
  | 'check_suite.requested'
  | 'check_suite.rerequested';
type WebhookPayloadCommitCommentEventTypeKeys =
  | 'commit_comment'
  | 'commit_comment.created';
type WebhookPayloadContentReferenceEventTypeKeys =
  | 'content_reference'
  | 'content_reference.created';
type WebhookPayloadCreateEventTypeKeys = 'create';
type WebhookPayloadDeleteEventTypeKeys = 'delete';
type WebhookPayloadDeployKeyEventTypeKeys =
  | 'deploy_key'
  | 'deploy_key.created'
  | 'deploy_key.deleted';
type WebhookPayloadDeploymentEventTypeKeys =
  | 'deployment'
  | 'deployment.created';
type WebhookPayloadDeploymentStatusEventTypeKeys =
  | 'deployment_status'
  | 'deployment_status.created';
type WebhookPayloadForkEventTypeKeys = 'fork';
type WebhookPayloadGithubAppAuthorizationEventTypeKeys =
  | 'github_app_authorization'
  | 'github_app_authorization.revoked';
type WebhookPayloadGollumEventTypeKeys = 'gollum';
type WebhookPayloadInstallationEventTypeKeys =
  | 'installation'
  | 'installation.created'
  | 'installation.deleted'
  | 'installation.new_permissions_accepted'
  | 'installation.suspend'
  | 'installation.unsuspend';
type WebhookPayloadInstallationRepositoriesEventTypeKeys =
  | 'installation_repositories'
  | 'installation_repositories.added'
  | 'installation_repositories.removed';
type WebhookPayloadIssueCommentEventTypeKeys =
  | 'issue_comment'
  | 'issue_comment.created'
  | 'issue_comment.deleted'
  | 'issue_comment.edited';
type WebhookPayloadIssuesEventTypeKeys =
  | 'issues'
  | 'issues.assigned'
  | 'issues.closed'
  | 'issues.deleted'
  | 'issues.demilestoned'
  | 'issues.edited'
  | 'issues.labeled'
  | 'issues.locked'
  | 'issues.milestoned'
  | 'issues.opened'
  | 'issues.pinned'
  | 'issues.reopened'
  | 'issues.transferred'
  | 'issues.unassigned'
  | 'issues.unlabeled'
  | 'issues.unlocked'
  | 'issues.unpinned';
type WebhookPayloadLabelEventTypeKeys =
  | 'label'
  | 'label.created'
  | 'label.deleted'
  | 'label.edited';
type WebhookPayloadMarketplacePurchaseEventTypeKeys =
  | 'marketplace_purchase'
  | 'marketplace_purchase.cancelled'
  | 'marketplace_purchase.changed'
  | 'marketplace_purchase.pending_change'
  | 'marketplace_purchase.pending_change_cancelled'
  | 'marketplace_purchase.purchased';
type WebhookPayloadMemberEventTypeKeys =
  | 'member'
  | 'member.added'
  | 'member.edited'
  | 'member.removed';
type WebhookPayloadMembershipEventTypeKeys =
  | 'membership'
  | 'membership.added'
  | 'membership.removed';
type WebhookPayloadMetaEventTypeKeys = 'meta' | 'meta.deleted';
type WebhookPayloadMilestoneEventTypeKeys =
  | 'milestone'
  | 'milestone.closed'
  | 'milestone.created'
  | 'milestone.deleted'
  | 'milestone.edited'
  | 'milestone.opened';
type WebhookPayloadOrganizationEventTypeKeys =
  | 'organization'
  | 'organization.deleted'
  | 'organization.member_added'
  | 'organization.member_invited'
  | 'organization.member_removed'
  | 'organization.renamed';
type WebhookPayloadOrgBlockEventTypeKeys =
  | 'org_block'
  | 'org_block.blocked'
  | 'org_block.unblocked';
type WebhookPayloadPackageEventTypeKeys =
  | 'package'
  | 'package.published'
  | 'package.updated';
type WebhookPayloadPageBuildEventTypeKeys = 'page_build';
type WebhookPayloadProjectCardEventTypeKeys =
  | 'project_card'
  | 'project_card.converted'
  | 'project_card.created'
  | 'project_card.deleted'
  | 'project_card.edited'
  | 'project_card.moved';
type WebhookPayloadProjectColumnEventTypeKeys =
  | 'project_column'
  | 'project_column.created'
  | 'project_column.deleted'
  | 'project_column.edited'
  | 'project_column.moved';
type WebhookPayloadProjectEventTypeKeys =
  | 'project'
  | 'project.closed'
  | 'project.created'
  | 'project.deleted'
  | 'project.edited'
  | 'project.reopened';
type WebhookPayloadPublicEventTypeKeys = 'public';
type WebhookPayloadPullRequestEventTypeKeys =
  | 'pull_request'
  | 'pull_request.assigned'
  | 'pull_request.closed'
  | 'pull_request.edited'
  | 'pull_request.labeled'
  | 'pull_request.locked'
  | 'pull_request.opened'
  | 'pull_request.ready_for_review'
  | 'pull_request.reopened'
  | 'pull_request.review_request_removed'
  | 'pull_request.review_requested'
  | 'pull_request.synchronize'
  | 'pull_request.unassigned'
  | 'pull_request.unlabeled'
  | 'pull_request.unlocked';
type WebhookPayloadPullRequestReviewEventTypeKeys =
  | 'pull_request_review'
  | 'pull_request_review.dismissed'
  | 'pull_request_review.edited'
  | 'pull_request_review.submitted';
type WebhookPayloadPullRequestReviewCommentEventTypeKeys =
  | 'pull_request_review_comment'
  | 'pull_request_review_comment.created'
  | 'pull_request_review_comment.deleted'
  | 'pull_request_review_comment.edited';
type WebhookPayloadPushEventTypeKeys = 'push';
type WebhookPayloadReleaseEventTypeKeys =
  | 'release'
  | 'release.created'
  | 'release.deleted'
  | 'release.edited'
  | 'release.prereleased'
  | 'release.published'
  | 'release.unpublished';
type WebhookPayloadRepositoryDispatchEventTypeKeys =
  | 'repository_dispatch'
  | 'repository_dispatch.on-demand-test';
type WebhookPayloadRepositoryEventTypeKeys =
  | 'repository'
  | 'repository.archived'
  | 'repository.created'
  | 'repository.deleted'
  | 'repository.edited'
  | 'repository.privatized'
  | 'repository.publicized'
  | 'repository.renamed'
  | 'repository.transferred'
  | 'repository.unarchived';
type WebhookPayloadRepositoryImportEventTypeKeys = 'repository_import';
type WebhookPayloadRepositoryVulnerabilityAlertEventTypeKeys =
  | 'repository_vulnerability_alert'
  | 'repository_vulnerability_alert.create'
  | 'repository_vulnerability_alert.dismiss'
  | 'repository_vulnerability_alert.resolve';
type WebhookPayloadSecurityAdvisoryEventTypeKeys =
  | 'security_advisory'
  | 'security_advisory.performed'
  | 'security_advisory.published'
  | 'security_advisory.updated';
type WebhookPayloadSponsorshipEventTypeKeys =
  | 'sponsorship'
  | 'sponsorship.created'
  | 'sponsorship.pending_tier_change';
type WebhookPayloadStarEventTypeKeys = 'star' | 'star.created' | 'star.deleted';
type WebhookPayloadStatusEventTypeKeys = 'status';
type WebhookPayloadTeamEventTypeKeys =
  | 'team'
  | 'team.added_to_repository'
  | 'team.created'
  | 'team.deleted'
  | 'team.edited'
  | 'team.removed_from_repository';
type WebhookPayloadTeamAddEventTypeKeys = 'team_add';
type WebhookPayloadWatchEventTypeKeys = 'watch' | 'watch.started';
type WebhookPayloadPingEventTypeKeys = 'ping';

type AllEventTypes =
  | EventTypeError
  | AnyEvent
  | WebhookPayloadCheckRunEventTypeKeys
  | WebhookPayloadCheckSuiteEventTypeKeys
  | WebhookPayloadCommitCommentEventTypeKeys
  | WebhookPayloadContentReferenceEventTypeKeys
  | WebhookPayloadCreateEventTypeKeys
  | WebhookPayloadDeleteEventTypeKeys
  | WebhookPayloadDeployKeyEventTypeKeys
  | WebhookPayloadDeploymentEventTypeKeys
  | WebhookPayloadDeploymentStatusEventTypeKeys
  | WebhookPayloadForkEventTypeKeys
  | WebhookPayloadGithubAppAuthorizationEventTypeKeys
  | WebhookPayloadGollumEventTypeKeys
  | WebhookPayloadInstallationEventTypeKeys
  | WebhookPayloadInstallationRepositoriesEventTypeKeys
  | WebhookPayloadIssueCommentEventTypeKeys
  | WebhookPayloadIssuesEventTypeKeys
  | WebhookPayloadLabelEventTypeKeys
  | WebhookPayloadMarketplacePurchaseEventTypeKeys
  | WebhookPayloadMemberEventTypeKeys
  | WebhookPayloadMembershipEventTypeKeys
  | WebhookPayloadMetaEventTypeKeys
  | WebhookPayloadMilestoneEventTypeKeys
  | WebhookPayloadOrganizationEventTypeKeys
  | WebhookPayloadOrgBlockEventTypeKeys
  | WebhookPayloadPackageEventTypeKeys
  | WebhookPayloadPageBuildEventTypeKeys
  | WebhookPayloadProjectCardEventTypeKeys
  | WebhookPayloadProjectColumnEventTypeKeys
  | WebhookPayloadProjectEventTypeKeys
  | WebhookPayloadPublicEventTypeKeys
  | WebhookPayloadPullRequestEventTypeKeys
  | WebhookPayloadPullRequestReviewEventTypeKeys
  | WebhookPayloadPullRequestReviewCommentEventTypeKeys
  | WebhookPayloadPushEventTypeKeys
  | WebhookPayloadReleaseEventTypeKeys
  | WebhookPayloadRepositoryDispatchEventTypeKeys
  | WebhookPayloadRepositoryEventTypeKeys
  | WebhookPayloadRepositoryImportEventTypeKeys
  | WebhookPayloadRepositoryVulnerabilityAlertEventTypeKeys
  | WebhookPayloadSecurityAdvisoryEventTypeKeys
  | WebhookPayloadSponsorshipEventTypeKeys
  | WebhookPayloadStarEventTypeKeys
  | WebhookPayloadStatusEventTypeKeys
  | WebhookPayloadTeamEventTypeKeys
  | WebhookPayloadTeamAddEventTypeKeys
  | WebhookPayloadWatchEventTypeKeys
  | WebhookPayloadPingEventTypeKeys;

// type GetWebhookPayloadTypeFromEvent<T> = T extends EventTypeError
//   ? Error
//   : T extends AnyEvent
//   ? any
//   : T extends WebhookPayloadCheckRunEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadCheckRun>
//   : T extends WebhookPayloadCheckSuiteEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadCheckSuite>
//   : T extends WebhookPayloadCommitCommentEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadCommitComment>
//   : T extends WebhookPayloadContentReferenceEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadContentReference>
//   : T extends WebhookPayloadCreateEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadCreate>
//   : T extends WebhookPayloadDeleteEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadDelete>
//   : T extends WebhookPayloadDeployKeyEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadDeployKey>
//   : T extends WebhookPayloadDeploymentEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadDeployment>
//   : T extends WebhookPayloadDeploymentStatusEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadDeploymentStatus>
//   : T extends WebhookPayloadForkEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadFork>
//   : T extends WebhookPayloadGithubAppAuthorizationEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadGithubAppAuthorization>
//   : T extends WebhookPayloadGollumEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadGollum>
//   : T extends WebhookPayloadInstallationEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadInstallation>
//   : T extends WebhookPayloadInstallationRepositoriesEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadInstallationRepositories>
//   : T extends WebhookPayloadIssueCommentEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadIssueComment>
//   : T extends WebhookPayloadIssuesEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadIssues>
//   : T extends WebhookPayloadLabelEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadLabel>
//   : T extends WebhookPayloadMarketplacePurchaseEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadMarketplacePurchase>
//   : T extends WebhookPayloadMemberEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadMember>
//   : T extends WebhookPayloadMembershipEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadMembership>
//   : T extends WebhookPayloadMetaEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadMeta>
//   : T extends WebhookPayloadMilestoneEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadMilestone>
//   : T extends WebhookPayloadOrganizationEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadOrganization>
//   : T extends WebhookPayloadOrgBlockEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadOrgBlock>
//   : T extends WebhookPayloadPackageEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadPackage>
//   : T extends WebhookPayloadPageBuildEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadPageBuild>
//   : T extends WebhookPayloadProjectCardEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadProjectCard>
//   : T extends WebhookPayloadProjectColumnEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadProjectColumn>
//   : T extends WebhookPayloadProjectEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadProject>
//   : T extends WebhookPayloadPublicEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadPublic>
//   : T extends WebhookPayloadPullRequestEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadPullRequest>
//   : T extends WebhookPayloadPullRequestReviewEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadPullRequestReview>
//   : T extends WebhookPayloadPullRequestReviewCommentEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadPullRequestReviewComment>
//   : T extends WebhookPayloadPushEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadPush>
//   : T extends WebhookPayloadReleaseEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadRelease>
//   : T extends WebhookPayloadRepositoryDispatchEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadRepositoryDispatch>
//   : T extends WebhookPayloadRepositoryEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadRepository>
//   : T extends WebhookPayloadRepositoryImportEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadRepositoryImport>
//   : T extends WebhookPayloadRepositoryVulnerabilityAlertEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadRepositoryVulnerabilityAlert>
//   : T extends WebhookPayloadSecurityAdvisoryEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadSecurityAdvisory>
//   : T extends WebhookPayloadSponsorshipEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadSponsorship>
//   : T extends WebhookPayloadStarEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadStar>
//   : T extends WebhookPayloadStatusEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadStatus>
//   : T extends WebhookPayloadTeamEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadTeam>
//   : T extends WebhookPayloadTeamAddEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadTeamAdd>
//   : T extends WebhookPayloadWatchEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadWatch>
//   : T extends WebhookPayloadPingEventTypeKeys
//   ? Webhooks.WebhookEvent<Webhooks.WebhookPayloadPing>
//   : never;
