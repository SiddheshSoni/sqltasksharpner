const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sid2444',
    database:'studentdb'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection to DB Successfull!");

    const createStudentTBQuery = `CREATE TABLE IF NOT EXISTS Students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(30) UNIQUE,
        age INT
    )`;

    connection.execute(createStudentTBQuery, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Successfully created table Student!");
    })
});

module.exports= connection;