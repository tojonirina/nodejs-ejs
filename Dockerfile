# syntax=docker/dockerfile:1
FROM node:14-alpine

ENV NODE_ENV=production

WORKDIR /nodejs-ejs

COPY package*.json ./

RUN npm install --production

COPY . .

CMD ["npm","start"]

EXPOSE 3000