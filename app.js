const express = require('express');

const app = express();

const bodyParser = require('body-parser');

var cors = require('cors');

const sequelize = require('./util/database');

const manager = require('./routes/manager');

app.use(bodyParser.json());

app.use(cors());

app.use('/user',manager);

sequelize.sync().
then(()=>{
    app.listen(3000);
}).catch(err=>console.log(err))