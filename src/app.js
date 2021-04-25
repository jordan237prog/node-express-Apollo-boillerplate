import apollo from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import config from './Config/index.js';

const app = express();
app.use(cors());
const { ApolloServer, gql } = apollo;
const port = config.port;

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;
const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Robin',
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
  console.log(`In the ${config.env} environment`);
});
