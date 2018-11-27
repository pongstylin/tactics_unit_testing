const express = require('express');
const app = express();
const port = 2100;

app.use(express.static('static'));

app.listen(port, () => {
  console.log('Unit Testing now running at URL: http://localhost:'+port);
  console.log('');
});
