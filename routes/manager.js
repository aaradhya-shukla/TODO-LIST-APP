const express = require('express');

const admin = require('../controllers/admin');

const router = express.Router();

router.get('/get-todos',admin.getTodos)

router.post('/add-todo',admin.addTodo)

router.get('/delete-todo/:expId',admin.deleteTodo)

module.exports=router;