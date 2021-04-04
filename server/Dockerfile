FROM node:12.13.1-alpine

RUN apk --no-cache add --virtual builds-deps build-base python git

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

COPY . /usr/src/app/

RUN yarn install && \
  npm rebuild bcrypt --build-from-source

EXPOSE 4000

CMD [ "npm", "run", "start"]
