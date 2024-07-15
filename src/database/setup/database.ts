import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

// Connect to MySQL using Sequelize
const todoSequelize = new Sequelize(
  DB_NAME as string,
  DB_USERNAME as string,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false,
  },
);

export default todoSequelize;
