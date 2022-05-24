const mongoose = require('mongoose');

// for in address mongo before / between name database?
const connectionString =
  'mongodb+srv://shirin:RCtWOiGgJH0t2FYg@cluster0.1uhef.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

mongoose
  .connect(connectionString)
  .then(() => console.log('Connected to the db ....'))
  .catch((err) => console.log(err));
