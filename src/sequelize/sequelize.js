import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

const initSequelize = async () => {
  dotenv.config();

  const sequelize = new Sequelize(process.env.URI, {
    define: {
      freezeTableName: true,
    },
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return Promise.resolve(sequelize);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default initSequelize;
