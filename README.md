# dev-raven

dev-raven是一个同步其他应用回调的服务，它可以将github、gitlab、docker hub等回调消息同步到企业微信群、个人微信群、邮箱等。

## 启动

### docker-compose  

```
git clone https://github.com/iyjian/dev-raven.git
cd dev-raven
cp .env.sample .env
./start.sh
```

### pnpm

```
git clone https://github.com/iyjian/dev-raven.git
cd dev-raven
cp .env.sample .env
pnpm i
pnpm start:dev
```

## 用法示例

以下是几个构造 webhook 地址的例子：

- GitLab webhook 地址：`https://r.tltr.top?from=gitlab&to=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxx-xxxx`
- GitHub webhook 地址：`https://r.tltr.top?from=github&to=mymail@address.com`
- 阿里云 Docker webhook 地址：`https://r.tltr.top?from=aliyundocker&to=mymail@address.com`
- `from=raw` 需要额外的参数 `content=****`，会将 `content` 里的内容作为文本发送，不做任何转换：`https://r.tltr.top?from=raw&content=helloworld&to=mymail@address.com`
- 如果不带 `to` 参数，则不会转发到任何地方，只是根据 `from` 做消息内容的转化，方便调试：`https://r.tltr.top?from=raw&content=hello-world`

注意：以上示例中的 `https://r.tltr.top` 是 dev-raven 的地址，如不希望使用我的服务，需要替换成你自己的地址。

