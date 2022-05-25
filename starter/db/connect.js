const mongoose = require('mongoose');

// for in address mongo before / between name database?
const connectionString =
  'mongodb+srv://shirin:RCtWOiGgJH0t2FYg@cluster0.1uhef.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    // are not supports
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
