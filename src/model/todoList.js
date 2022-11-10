const {Schema, model} =  require("mongoose");

const todoListSchema = new Schema({
title: {
    type: String,
    required: true,
    unique: true,
},
description: {
    type: String,
    required: true,
},

},
{timestamps: true}
);

const todoListModel = model ("todoList", todoListSchema);

module.exports = todoListModel;