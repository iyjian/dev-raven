FROM node:18.16.0-alpine3.17

ENV TZ Asia/Shanghai

RUN apk add --update tzdata \
  && echo "${TZ}" > /etc/timezone \
  && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
  && npm install -g pnpm

WORKDIR /usr/src/app

ADD package.json /usr/src/app

ADD pnpm-lock.yaml /usr/src/app

RUN pnpm i

COPY . /usr/src/app

RUN pnpm build && pnpm prune --prod

CMD ["pnpm", "start:prod"]
