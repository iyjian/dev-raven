export type AliyunDockerBuildPushPayload = {
  push_data: {
    digest: string;
    pushed_at: string;
    tag: string;
  };
  repository: {
    date_created: string;
    name: string;
    namespace: string;
    region: string;
    repo_authentication_type: string;
    repo_full_name: string;
    repo_origin_type: string;
    repo_type: string;
  };
};

/*
Headers:

Content-Type: application/json
Request method: POST

Body

{
  "push_data": {
    "digest": "sha256:bb7d38140b7c3e9aa1fc0403f915bbd89a22799aaea5d7d1f25652953bc3df8a",
    "pushed_at": "2020-08-11 10:15:13",
    "tag": "latest"
  },
  "repository": {
    "date_created": "2020-08-10 13:18:38",
    "name": "autobid-ali",
    "namespace": "iyjian-softwares",
    "region": "cn-shanghai",
    "repo_authentication_type": "NO_CERTIFIED",
    "repo_full_name": "iyjian-softwares/docker-ali",
    "repo_origin_type": "NO_CERTIFIED",
    "repo_type": "PUBLIC"
  }
}
*/
