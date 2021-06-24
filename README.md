# dev-raven

dev-raven是一个同步其他应用回调的服务，它可以将github、gitlab、docker hub等回调消息同步到企业微信群、个人微信群等。

## 安装

使用docker-compose  

```
git clone **repository**
cd dev-raven && docker-compose up --build -d
```

使用yarn  

```
git clone **repository**
cd dev-raven && yarn add . && yarn start start:prod 
```

## 使用

1. 构造一个指向dev-raven服务的通知地址
2. 将这个回调地址填入其他应用的回调地址中即可

### 如何构造服务地址  

## from=gitlab
https://r.tltr.top?from=gitlab&to=微信群hook地址  

## from=github
https://r.tltr.top?from=github&to=https://wx.zhongzhengtx.com/group/QeqFnaz  

## from=aliyundocker
https://r.tltr.top?from=aliyundocker&to=https://wx.zhongzhengtx.com/group/QeqFnaz  

## from=raw 需要额外参数content=****，会将content里的内容作为文本发送，不做任何转换
https://r.tltr.top?from=raw&content=helloworld&to=https://wx.zhongzhengtx.com/group/QeqFnaz  

## 如果不带to参数，则不会转发到任何地方，只是根据from做消息内容的转化（方便调试）
https://r.tltr.top?from=raw&content=hello-world  
  





# 项目结构

/service
  hook.service.ts 
    toHook 根据to参数判断通知参数
  aliyun.service.ts
  github.service.ts
  gitlab.service.ts
  raw.service.ts
/config
  config.ts 回调消息的模板
