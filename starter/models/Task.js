const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    // for it is dont empty
    required: [true, 'must provide name'],
    trim: true,
    maxLength: [20, 'name can not be more 20 character'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
