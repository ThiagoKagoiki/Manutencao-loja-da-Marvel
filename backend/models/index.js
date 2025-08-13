import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './User.js';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

const db = {
  Sequelize,
  sequelize,
  User: UserModel(sequelize)
};

export default db;