const Task = require('../models/Task');
const getAllTasks = async (req, res) => {
  try {
    // get all tasks
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
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
const getTask = async (req, res) => {
  //   res.send('get single task (:');
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `NO Task With Id : ${taskId}` });
    }
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `NO Task With Id : ${taskId}` });
    }
    res.status(200).json({ task });
    // for delete in frontEnd
    // res.status(200).send();
    // res.status(200).json({ task: null, status: 'success' });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body);
    if (!task) {
      return res.status(404).json({ msg: `NO Task With Id : ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send('update task (:');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

// pass : uOQmS3nQq1a50vie
