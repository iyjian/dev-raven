#!/bin/bash

git pull && docker-compose build && \
docker-compose up -d && \
docker-compose logs -f --tail 100