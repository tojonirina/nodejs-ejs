# Node.js and EJS App exemple
---
## Install and run locally
Make sure you have [Node.js](http://nodejs.org/) installed on your computer

```sh
git clone https://github.com/tojonirina/nodejs-ejs.git
cd nodejs-ejs/
cd src/
npm install
npx sequelize db:create
npx sequelize db:migrate
npm start
```
It will be running in [http://localhost:8080/](http://localhost:8080/)

## Run with docker
Make sur you have [get-docker](https://docs.docker.com/get-docker/) docker installed on your computer

After cloning the app , go to the nodejs-ejs directory with ```sh cd nodejs-ejs/```and run :

```sh
docker build -t nodejs-ejs .
docker run -dp 3030:3030 nodejs-ejs
```

Go to the http://localhost:3030
