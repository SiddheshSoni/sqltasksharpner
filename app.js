const express = require('express');
const app = express();
const studentRoute = require('./routes/studentRoute');
const db = require('./utils/db-connection');

//models
const StudentModels = require('./models/students');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.use('/students', studentRoute);

db.sync({force:true}).then(()=>{
    app.listen(4000, ()=>{
        console.log("Server Started at port 4000!");
    })
}).catch((err)=>{
    console.log(err);
})