const express = require('express');
 const app = express();
 
app.get('/', (req, res) => {
  console.log('Request Received');
const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}`);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('PORT: ', port);
});