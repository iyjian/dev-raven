#!/bin/bash

docker pull iyjian/dev-raven && \
docker-compose up -d && \
docker-compose logs -f --tail 100
