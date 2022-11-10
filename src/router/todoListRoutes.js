const router = require('express').Router();
const controller = require('../controller/todoListController');

router
.get("/",  controller.getAllTodoList)
.get("/:id",  controller.getTodoList)
.post("/",  controller.createTodoList)
.put("/:id",  controller.updateTodoList)
.delete("/:id",  controller.deleteTodoList);

module.exports = router;