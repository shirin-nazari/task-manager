// I have bug in connection in database I dont know but today try fix bug
require('./db/connect');

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const port = 3000;
// middleware
app.use(express.json());
// routes
app.get('/hello', (req, res) => {
  res.send('Hello my task manager');
});
// for get all tasks
app.use('/api/v1/tasks', tasks);
app.listen(port, () => {
  console.log(`the server run in port : ${port}...`);
});
