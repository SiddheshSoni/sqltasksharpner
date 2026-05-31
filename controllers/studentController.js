const db = require('../utils/db-connection');
const template = require('../utils/err-res');

const addStudent = (req, res)=>{
    const {name, email, age} = req.body;

    const addStudentQuery = `INSERT INTO Students (name, email, age) VALUES (?, ?, ?)`;

    db.execute(addStudentQuery, [name, email, age], (err, result)=>{
        const {status, message} = template(err, result);
        if(status !== 200){
            res.status(status);
            res.send("Failed sending data!");
        }
        res.status(status).send("Succesfully added student");
    })
};

const getAllStudents = (req, res) =>{
    
    const getStudentsQuery = `SELECT * FROM Students`;
    db.execute(getStudentsQuery, (err, result)=>{
      const {status, message} = template(err, result);
        if(status !== 200){
            res.status(status);
            res.send("Failed getting data!");
        }
        res.status(status).send("Succesfully fetched students table");  
    })
};

const getStudentById =(req, res)=>{
    const { id } = req.params;

    const getStudentByIdQuery = `SELECT * FROM Students WHERE id = ?`;
    db.execute(getStudentByIdQuery, [id], (err, result)=>{
        const {status, message} = template(err, result);
        if(status !== 200){
            res.status(status);
            res.send("Failed getting student data!");
        }
        res.status(status).send("Succesfully fetched student with id:" + id);
    }) 
};

const updateStudentById = (req, res)=>{
    const { id } = req.params;
    const {name, email, age} = req.body;

    const updateStudentByIdQuery = `UPDATE Students SET name = ?, email = ?, age = ? WHERE id = ?`;
    db.execute(updateStudentByIdQuery, [name, email, age, id], (err, result)=>{
        const {status, message} = template(err, result);
        if(status !== 200){
            res.status(status);
            res.send("Failed updating student data!");
        }
        res.status(status).send("Succesfully updated student with id:" + id);
    }) 
};

const deleteStudentById = (req, res)=>{
    const { id } = req.params;

    const deleteStudentByIdQuery = `DELETE FROM Students WHERE id = ?`

    db.execute(deleteStudentByIdQuery, [id], (err, result)=>{
        const {status, message} = template(err, result);
        if(status !== 200){
            res.status(status);
            res.send("Failed deleting student data!");
        }
        res.status(status).send("Succesfully deleted student with id:" + id);
    })
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById
}