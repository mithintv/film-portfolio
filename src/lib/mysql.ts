import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "film_portfolio",
  "root",
  `${process.env.PASSWORD}`,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
