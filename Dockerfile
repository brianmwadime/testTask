# build environment
FROM node:16.14.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules /.bin:$PATH
RUN apk add git
COPY yarn.lock package.json ./
RUN yarn install --frozen-lockfile
COPY . ./

RUN npm run build

# production environment
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]