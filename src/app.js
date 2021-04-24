console.log('welcome to this application');

import express from 'express';

import config from './Config/index.js';

const app = express();
const port = config.port;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
  console.log(`In the ${config.env} environment`);
});
