import { ApolloServer } from "@apollo/server";
import * as Query from "./resolvers/Query.js";
import * as Student from "./resolvers/Student.js";
import * as Mutation from "./resolvers/Mutation.js";
import * as Instructor from "./resolvers/Instructor.js";
import * as Course from "./resolvers/Course.js";
import * as Takes from "./resolvers/Takes.js";
import fs from "fs";

const resolvers = { Query, Student, Mutation, Instructor, Course, Takes };

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./src/apollo_server/schema.graphql", "utf-8"),
  resolvers,
});

export default server;
