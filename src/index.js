const express = require('express');  //importing express module
const {json} = require('express');
const connect = require("./config/database");
const todoListRoute = require('./router/todoListRoutes');

connect(); 

const app = express();  //instantiate or initialize
app.use(json());
app.use('/todoList', todoListRoute);

const PORT = process.env.PORT || 7000;  //call port from .env 

app.get('/', (req, res) => {
    res.send("Todo List on MongoDB")
})

app.listen(7000, () => {
        console.log(`Serving on port ${PORT}`);
});  //add port



