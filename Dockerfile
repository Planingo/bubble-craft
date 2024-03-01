FROM nginx:1.17

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn build-storybook
COPY storybook-static ./

RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/

COPY --from=builder /usr/src/app/storybook-static /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
