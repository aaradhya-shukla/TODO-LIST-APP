const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('todo-app','root','Cse&2088',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;