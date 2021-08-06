# Node.js and EJS App exemple
---
## Install and run locally
Make sure you have [Node.js](http://nodejs.org/) installed on your computer

- Get code source from remote repository:
```sh
git clone https://github.com/tojonirina/nodejs-ejs.git
cd nodejs-ejs/
```
- Install all dependency:
```sh
npm install
```
- Create database :
```sh
sequelize db:create --config src/config/config.json
sequelize db:migrate --config src/config/config.json --migrations-path src/migrations
```
- Create .env file from .env.exemple and change information if you want

- Start the application
```sh
npm start
```
The app will be running in [http://localhost:3000/](http://localhost:3000/)