import { startStandaloneServer } from "@apollo/server/standalone";
import server from "./src/apollo_server/apollo.js";
import initSequelize from "./src/sequelize/sequelize.js";
import getModels from "./src/sequelize/getModels.js";

const sequelize = await initSequelize();

const models = getModels(sequelize);

await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({ models }),
});

console.log(`🚀  Server ready at: ${url}`);
