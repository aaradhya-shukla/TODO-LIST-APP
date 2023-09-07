const Todo = require('../models/todo');

exports.getTodos=async (req,res,next)=>{
    try{
        const todos = await Todo.findAll()
        res.status(200).json({todos:todos});
    }
    catch(err){
        console.log(err);
    }
}

exports.addTodo=async (req,res,next)=>{
    const todo = req.body.todo;
    const description = req.body.description;
    try{
        const todos = await Todo.create({
            todo:todo,
            description:description
        }) 
        res.status(201).json({todos:todos});
    }
    catch(err){
        console.log(err);
    }
}

exports.deleteTodo=async (req,res,next)=>{
    const id = req.params.expId;
    console.log('yeee')
    try{
        const result = await Todo.destroy({where:{id : id}});
        console.log(result)
        res.status(202).json({msg:'deleted'});
    }
    catch(err){
        console.log(err);
    }
}