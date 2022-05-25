const Task = require('../models/Task');
const getAllTasks = async (req, res) => {
  try {
    // get all tasks
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  // res.send('get all items(:');
};
const createTask = async (req, res) => {
  //    res.send('create task (:');
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = (req, res) => {
  //   res.send('get single task (:');
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send('update task (:');
};

const deleteTask = (req, res) => {
  res.send('delete task (:');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

// pass : uOQmS3nQq1a50vie
