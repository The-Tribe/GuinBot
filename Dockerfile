FROM node:8.15.1-alpine

LABEL maintainer="Guinoala"

WORKDIR /app

COPY . /app

RUN npm install

ENTRYPOINT ["node", "bot.js"]
