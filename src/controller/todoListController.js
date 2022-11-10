const { trusted } = require("mongoose");
const TodoList = require("../model/todoList");

//get all todoLists from
exports.getAllTodoList = async (req, res) =>{
    try{
        let todoLists = await TodoList.find();
        if(todoLists.length === 0)
        return res.status(404).json({
            success: false,
            message: 'No Todo List(s) were Found'
        });
        res.status(200).json({
            success: true,
            message: "Todo List(s) Found",
            todoLists,
            count: todoLists.length,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
}

//get single Todo List
exports.getTodoList = async (req, res) => {
    try{
        let id = {_id: req.params.id};
        let todoList = await TodoList.findOne(id);
        if(!todoList) return res.status(404).json({
            success: false,
            message: "Todo List not Found"
        })
        res.status(200).json({
            success:true,
            message: "Todo List Found",
            todoList,
        });
    }catch (error){
        res.status(500).json({
            success:false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}
//create todoList
exports.createTodoList = async (req, res) => {
   try{
    let todoList = await req.body;
    let created = await TodoList.create(todoList);
    if(!created) return res.status(400).json({
        success:false,
        message: "Todo List Creation Failed"
    });
    return res.status(201).json({
        success: true,
        message: "Todo List Created Successfully",
        todoList:created
    });
   }catch(error){
        res.status(500).json({
            success:false,
            message: "Internal Server Error",
            error: error.message
        });
   }
}
//update todoList
exports.updateTodoList = async (req, res) => {
   try{
    let id = {_id: req.params.id};
    let todoList = await req.body
    let update = await TodoList.findOneAndUpdate(id, todoList, {new: true})
    if (!update){
        return res.status(400).json({
            success: false,
            message: "Todo List not Updated",
        });
    }
    return res.status(500).json({
        success:true,
        message: "Todo List Updated",
        todoList: update,
    });
   }catch(error){
    res.status(500).json({
        success:false,
        message: "Internal Server Error",
        error: error.message,
    });
   }

}
//delete todoList
exports.deleteTodoList = async (req, res) => {
    try{
        let id = {_id: req.params.id}
        let deleted = await TodoList.findOneAndRemove(id);
        if(!deleted){
            return res.status(400).json({
                success:false,
                message: "Todo List not deleted",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Todo List deleted Successfully",
            deleted
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        })
    }
}