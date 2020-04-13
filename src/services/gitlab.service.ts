import { Injectable } from "@nestjs/common";
import { HookParse } from "../interfaces";

@Injectable()
export class GitLabHookService implements HookParse {
  parse(data: any, to: string): string {
    return data;
  }

}