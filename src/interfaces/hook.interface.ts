export enum HookFrom {
  GITHUB="GITHUB",
  GITLAB ="GITLAB",
  ALIYUNDOCKER ="ALIYUNDOCKER",
}

export interface HookParse {
  parse(data: GithubData | AliyunData, event?: string) : string,
}

export interface GithubCommit {
  id: string,
  message: string
}

export interface GithubRepository {
  full_name: string
}

export interface GithubPusher {
  name: string
}

export interface GithubData {
  repository: GithubRepository,
  pusher: GithubPusher,
  ref: string,
  commits: GithubCommit[],
}

export interface AliyunData {
  repository: AliyunRepository, 
  push_data: AliyunPusher,
}

export interface AliyunRepository {
  region: string,
  repo_full_name: string,
}
export interface AliyunPusher {
  tag: string,
  pushed_at: string,
}