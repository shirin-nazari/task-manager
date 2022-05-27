const mongoose = require('mongoose');

// for in address mongo before / between name database?

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    // are not supports
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
