FROM node:lts-alpine

ENV TZ Asia/Shanghai

RUN apk add --update tzdata \
  && echo "${TZ}" > /etc/timezone \
  && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
  && mkdir -p /usr/src/app \
  && mkdir -p /usr/src/build

WORKDIR /usr/src/app

ADD package.json /usr/src/app

ADD yarn.lock /usr/src/app

RUN yarn config set registry https://registry.npm.taobao.org/

RUN yarn install

COPY . /usr/src/app

RUN yarn run build
