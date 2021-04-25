import apollo from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import config from './Config/index.js';
import schema from './Models/index.js';
import resolvers from './Resolvers/index.js';

const app = express();
app.use(cors());

const { ApolloServer } = apollo;
const port = config.port;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.get('/', (req, res) => {
  res.send('Hello! Here is the root dir of the project');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
  console.log(`In the ${config.env} environment`);
});
