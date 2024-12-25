import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import typeDefs from './typeDefs';
import * as resolvers from './resolvers';

export const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ prisma }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
