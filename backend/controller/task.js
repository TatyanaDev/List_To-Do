const createError = require("http-errors");
const { Task } = require("../models");

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;

    const task = await Task.create(body);

    if (!task) {
      return next(createError(400), "Error creating task");
    }

    res.status(201).send({ data: task });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [, [updatedTask]] = await Task.update(req.body, {
      where: { id },
      returning: true,
    });

    if (!updatedTask) {
      return next(createError(400), "Error updating task");
    }

    res.status(200).send({ data: updatedTask });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const { pagination = {} } = req;

    const tasks = await Task.findAll({
      ...pagination,
      order: [['createdAt', 'ASC']],
    });

    if (!tasks.length) {
      return next(createError(404, "Tasks not found"));
    }

    res.status(200).send({ data: tasks });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const rowsCount = await Task.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, "Task not found"));
    }

    res.status(200).send({ data: id });
  } catch (err) {
    next(err);
  }
};
