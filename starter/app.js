const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
// middleware
// app.use(express.static('route front end'))
app.use(express.json());
// routes
// for get all tasks
app.use('/api/v1/tasks', tasks);

//  route.get // localhost: 3000 / api / v1 / tasks || get all tasks
//route.post// localhost:3000/api/v1/tasks  || create tasks
//route.get //localhost:3000/api/v1/tasks/hello ||get single task
// route.patch //localhost:3000/api/v1/tasks/123 || update task
//route.delete //localhost:3000/api/v1/tasks/hello ||delete task

app.use(notFound);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`the server run in port : ${port}...`);
    });
  } catch (err) {
    console.log(`error has => ${err} `);
  }
};
start();
