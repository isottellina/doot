FROM node:16-alpine
    MAINTAINER Louise Zanier <louise.zanier@free.fr>

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
CMD yarn run serve
