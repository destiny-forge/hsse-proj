FROM node:11-alpine as builder

RUN apk update \ 
    && apk upgrade \
    && apk add git

WORKDIR '/app'

COPY ./package.json ./

#RUN npm install --unsafe-perm

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
