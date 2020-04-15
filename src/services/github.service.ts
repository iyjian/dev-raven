import { Injectable } from "@nestjs/common";
import { HookParse, GithubData } from "../interfaces";

@Injectable()
export class GitHubHookService implements HookParse {
  // parse(data: any, _to: string, _event?: string): string {
  parse(data: GithubData): string {
    return this._push(data);
  }

  private _push(data: GithubData): string {
    const message = `[github]
      repository: ${data.repository.full_name}
      ${data.pusher.name} pushed on branch ${data.ref} with the following commit(s):
      ${data.commits.map((o: { id: string; message: string; }) => '[' + o.id.substr(0, 7) + '] ' + o.message).join("\n\n")}
    `
    return message.split(/\n/).map(o => o.trim()).join('\n')
  }
}