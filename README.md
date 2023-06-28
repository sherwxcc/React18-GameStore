# React18-GameStore :space_invader:

An online game store revision project with React-18, MySQL and Express.

## Backend Guide

To start, clone the application and install the node modules dependencies before use.

Install via [npm](https://www.npmjs.com/)

```
$ cd backend
$ npm install
```

Next, set up your own database and knex, please make sure your PostgreSQL is running and create your own `.env` file inside the root directory to store your knex connection details.

.env file example:

```
DB_NAME=<your database name>
DB_USERNAME=<your username>
DB_PASSWORD=<your password>
JWT_SECRET=<your JWT secret>
```

Afterthat, run below command in terminal to get your database ready.

```
$ cd database
$ knex migrate:latest;
$ knex seed:run;
```

The backend is ready! You may run the server through node.

```
$ node app.js
```

## Frontend Guide

Run the react frontend with yarn.

```
$ cd frontend
$ yarn install
```

After installing packages, you may run the frontend in development mode through yarn.

```
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
