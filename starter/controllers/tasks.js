const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');
const getAllTasks = asyncWrapper(async (req, res) => {
  // get all tasks
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ tasks, amount: tasks.length });
  // res
  //   .status(200)
  //   .json({ status: 'success', data: { tasks, nbHits: tasks.length } });

  // res.send('get all items(:');
});
const createTask = asyncWrapper(async (req, res) => {
  //    res.send('create task (:');
  // try {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
  // } catch (error) {
  //   res.status(500).json({ msg: error });
  // }
});
const getTask = asyncWrapper(async (req, res, next) => {
  //   res.send('get single task (:');
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`NO Task With Id : ${taskId}`, 404));
    // return res.status(404).json({ msg: `NO Task With Id : ${taskId}` });
  }
  res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`NO Task With Id : ${taskId}`, 404));
    // return res.status(404).json({ msg: `NO Task With Id : ${taskId}` });
  }
  res.status(200).json({ task });
  // for delete in frontEnd
  // res.status(200).send();
  // res.status(200).json({ task: null, status: 'success' });
});

const updateTask = asyncWrapper(async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(createCustomError(`NO Task With Id : ${taskId}`, 404));
      // return res.status(404).json({ msg: `NO Task With Id : ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send('update task (:');
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
  if (!task) {
    return next(createCustomError(`NO Task With Id : ${taskId}`, 404));
    // return res.status(404).json({ msg: `NO Task With Id : ${taskId}` });
  }
  res.status(200).json({ task });

  res.send('update task (:');
});
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};

// pass : uOQmS3nQq1a50vie
