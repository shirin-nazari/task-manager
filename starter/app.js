const express = require('express');
const app = express();

const port = 3000;

// routes
app.get('/hello', (req, res) => {
  res.send('Hello my task manager');
});

app.listen(port, () => {
  console.log(`the server run in port : ${port}...`);
});
