export enum HookFrom {
  GITHUB="GITHUB",
  GITLAB ="GITLAB",
  ALIYUNDOCKER ="ALIYUNDOCKER",
}

export interface HookParse {
  parse(data: any, to: string, event?: string) : string,
}