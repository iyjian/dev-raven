dev-raven的使用指南：

dev-raven是一个处理各类开发回调的接口，它可以将github、gitlab、docker hub等的回调消息通知到你希望通知的地方，现在打算支持企业微信、个人微信群、公众号消息。

你只需要按照要求构造好接口和接口参数，然后将此链接填入相应的回调地址即可。

以gitlab为例，如果你希望将gitlab的issue、commit、PR等消息通知到群中，你只需要构造以下接口地址：

## from=gitlab
https://raven.bidwin.top?from=gitlab&to=***以上你获得的微信群hook地址***

## from=github
https://raven.bidwin.top?from=github&to=https://wx.zhongzhengtx.com/group/QeqFnaz

## from=aliyundocker
https://raven.bidwin.top?from=aliyundocker&to=https://wx.zhongzhengtx.com/group/QeqFnaz

## from=raw 需要额外参数content=****，会将content里的内容作为文本发送，不做任何转换
https://raven.bidwin.top?from=raw&to=https://wx.zhongzhengtx.com/group/QeqFnaz

然后将以上参数填入gitlab的webhook地址即可。

# 项目结构

/service
  hook.service.ts 
    toHook 负责处理参数to中的内容，根据to的内容判断是微信的？还是企业微信的？还是微信公众号的通知地址，然后将msg传递给这个地址
  aliyun.service.ts
  github.service.ts
  gitlab.service.ts
  raw.service.ts






用做通知的公众号模板（我选了两个，防止封模板）: 

系统运行简报 OPENTM401692387 wxp18BgdHnOrt1rb6PPYH-yZYtCVjczIdzDxnDMwORk

{{first.DATA}}
系统名称：{{keyword1.DATA}}
简报内容：{{keyword2.DATA}}
发布时间：{{keyword3.DATA}}
{{remark.DATA}}

报告生成通知 OPENTM411640916 SLX5hylOR8iMvPSm3F-fgXGOiKW0kdVKMOkCK1B7S7g

{{first.DATA}}
获取路径：{{keyword1.DATA}}
报告期：{{keyword2.DATA}}
{{remark.DATA}}


微信群hook地址的获取步骤：

1. 将微波特拉入某个你想要通知的群中。
2. 拉入群后，一旦群内有人发言，则此群自动会记录到你名下。
3. 向微波特发送【hook】指令即可获得群通知的链接。

