# build environment
FROM node:18 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN corepack enable

COPY package.json yarn.lock .yarn .yarnrc.yml ./
RUN yarn

COPY . .

RUN yarn build-storybook

# production environment
FROM nginx:1.17

RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/

COPY --from=builder /usr/src/app/storybook-static /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
