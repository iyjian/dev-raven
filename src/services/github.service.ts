import { Injectable, Inject } from "@nestjs/common";
import { HookParse, GithubData } from "../interfaces";
import { template as _template } from 'lodash'
import { CONFIG_PROIVDE } from "../config";
@Injectable()
export class GitHubHookService implements HookParse {
  constructor(
    @Inject(CONFIG_PROIVDE) private readonly config,
  ) { }

  parse(data: GithubData): string {
    return this._push(data);
  }

  private _push(data: GithubData): string {
    // const message = `[github]
    //   repository: ${data.repository.full_name}
    //   ${data.pusher.name} pushed on branch ${data.ref} with the following commit(s):
    //   ${data.commits.map((o: { id: string; message: string; }) => '[' + o.id.substr(0, 7) + '] ' + o.message).join("\n\n")}
    // `
    // return message.split(/\n/).map(o => o.trim()).join('\n')
    return _template(this.config.template.github)(data)
  }
}