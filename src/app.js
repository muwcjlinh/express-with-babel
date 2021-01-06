// https://bezkoder.com/node-js-express-sequelize-mysql/
require('dotenv').config();
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';
import db from './models/index';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

let app = express();

if (process.env.ENV == 'DEV') {
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
} else {
  db.sequelize.sync();
}

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
