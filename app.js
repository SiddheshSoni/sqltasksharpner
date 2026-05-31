const express = require('express');
const app = express();
const studentRoute = require('./routes/studentRoute');

app.use(express.json());

app.get('/',(req,res)=>{
    resizeBy.send("Hello World!");
})

app.use('/students', studentRoute);

app.listen(4000, ()=>{
    console.log("Server Started at port 4000!");
})