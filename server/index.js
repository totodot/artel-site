import express from 'express';

import serverRenderer from './middleware/renderer';

const path = require('path');

const PORT = 3000;

const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

router.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }
  return console.log('server start');
});
