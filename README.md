# dev-raven

dev-raven是一个webhook转发服务，旨在帮助团队协作更加高效。它可以将各种webhook消息（例如gitlab的代码提交、PR、新建issue、issue回复以及状态变更等）转化为通知标题和通知内容，并发送到企业微信群、个人微信群、邮箱等。

使用dev-raven非常方便。您只需要部署服务，并通过参数指定from和to，就可以构造一个回调地址。然后，将回调地址配置到您的github或gitlab的webhook中，就可以开始接收通知了。

## 快速使用

比如希望将github中的事件推送到企业微信群，需要构造以下地址并配置到github的webhook配置中:

`https://r.tltr.top?from=gitlab&to=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxx-xxxx`

<img src="/docs/github-webhook-config.png" width="800"/>

配置完成后即可在企业微信群中收到github的提交、issue事件了。

<img src="/docs/github-push-to-wxgroup.jpeg" width="300"/>

注意：以上示例中的 `https://r.tltr.top` 是 dev-raven 的一个公网部署地址，如不希望使用公开的服务，需要替换成私有部署的地址。

## 部署与启动

### docker
```bash
docker run --restart always \
iyjian/dev-raven
```

### docker-compose  

```bash
git clone https://github.com/iyjian/dev-raven.git
cd dev-raven
cp .env.sample .env
./start.sh
```

### pnpm

```bash
git clone https://github.com/iyjian/dev-raven.git
cd dev-raven
cp .env.sample .env
pnpm i
pnpm start:dev
```

## 用法示例

以下是几个构造 webhook 地址的例子：

- github推送到邮箱的服务地址：
`https://r.tltr.top?from=github&to=mymail@address.com`

- 阿里云docker推送到邮箱的服务地址：
`https://r.tltr.top?from=aliyundocker&to=mymail@address.com`

- `from=raw` 需要额外的参数 `content=****`，会将 `content` 里的内容作为文本发送，不做任何转换：`https://r.tltr.top?from=raw&content=helloworld&to=mymail@address.com`
- 如果不带 `to` 参数，则不会转发到任何地方，只是根据 `from` 做消息内容的转化，方便调试：`https://r.tltr.top?from=raw&content=hello-world`



