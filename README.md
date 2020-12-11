dev-raven的使用指南：

dev-raven是一个处理各类开发回调的接口，它可以将github、gitlab、docker hub等的回调消息通知到你希望通知的地方，现在打算支持企业微信、个人微信群、公众号消息。

你只需要按照要求构造好接口和接口参数，然后将此链接填入相应的回调地址即可。

以gitlab为例，如果你希望将gitlab的issue、commit、PR等消息通知到群中，你只需要构造以下接口地址：

## from=gitlab
https://r.tltr.top?from=gitlab&to=微信群hook地址

## from=github
https://r.tltr.top?from=github&to=https://wx.zhongzhengtx.com/group/QeqFnaz

## from=aliyundocker
https://r.tltr.top?from=aliyundocker&to=https://wx.zhongzhengtx.com/group/QeqFnaz

## from=raw 需要额外参数content=****，会将content里的内容作为文本发送，不做任何转换
https://r.tltr.top?from=raw&to=https://wx.zhongzhengtx.com/group/QeqFnaz

## 如果没有to参数，则不做审核通知，只是根据from的定义将消息做格式转化
https://r.tltr.top?from=raw&content=hello-world

然后将以上参数填入gitlab的webhook地址即可。

# 项目结构

/service
  hook.service.ts 
    toHook 负责处理参数to中的内容，根据to的内容判断是微信的？还是企业微信的？还是微信公众号的通知地址，然后将msg传递给这个地址
  aliyun.service.ts
  github.service.ts
  gitlab.service.ts
  raw.service.ts

