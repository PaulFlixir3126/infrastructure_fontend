FROM node:12.16.1 as build-stage
COPY . /app
WORKDIR /app
RUN npm i
RUN npm run build

FROM nginx:1.15.6
COPY --from=build-stage /app/dist/track/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
