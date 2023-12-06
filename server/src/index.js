import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./components/index.js";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import dotenv from "dotenv";
import http from "http";
// import { startCDC } from "./components/meilisearch/cdc.js";



dotenv.config();

const port = process.env.PORT;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
  }) 

  await server.start()

  server.applyMiddleware({ app })


  await new Promise((resolve) => httpServer.listen({ port }, resolve));
  console.log(`Server ready at http://localhost:${port}/graphql`);
}


startApolloServer()
// startCDC()