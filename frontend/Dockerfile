FROM node:16-alpine AS build
    MAINTAINER Louise Zanier <louise.zanier@free.fr>

WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
