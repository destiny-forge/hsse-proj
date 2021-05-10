FROM node:alpine as builder

# environment variable to inject into build
ARG REACT_APP_BACKEND_SERVER
ENV REACT_APP_APIKEY=$REACT_APP_APIKEY

WORKDIR /app

COPY ./package.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM nginx
EXPOSE 3001
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
