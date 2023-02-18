import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: "postgres",
  database: config.database,
  host: "database-2.cpbmzmsxsvx2.us-east-1.rds.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  storage: ":memory:",
});
