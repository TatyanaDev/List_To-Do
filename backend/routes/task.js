const { Router } = require("express");
const paginate = require("../middlewares/paginate.mw");
const TaskController = require("../controller/task");

const TaskRouter = Router();

TaskRouter.route("/")
  .post(TaskController.createTask)
  .get(paginate, TaskController.getAllTasks);

TaskRouter.route("/:id")
  .patch(TaskController.updateTask)
  .delete(TaskController.deleteTask);

module.exports = TaskRouter;
