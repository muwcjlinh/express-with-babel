import dbConfig from '../config/db';
import Sequelize from 'sequelize';
import question from './question';
import answer from './answer';
import site from './site';
import userAnswer from './userAnswer';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sites = site(sequelize);
db.questions = question(sequelize);
db.answers = answer(sequelize);
db.user_answers = userAnswer(sequelize);

export default db;