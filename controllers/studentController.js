const Student = require('../models/students');

const addStudent = async (req, res)=>{
    try{
        const {name, email, age} = req.body;
        const student = await Student.create({
            email:email,
            name: name,
            age:age
        });
        
        res.status(201).send("User has been created!");
    }catch(err){
        res.status(500).send("Unable to add user! error:"+ err);
    }    
};

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();

        if (!students || students.length === 0) {
            return res.status(404).send('No Student Record Found!');
        }

        res.status(200).json(students);
    } catch (err) {
        res.status(500).send('Failed getting data err: ' + err);
    }
};

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).send('No Student Record Found with id: ' + id);
        }

        res.status(200).json(student);
    } catch (err) {
        res.status(500).send('Failed getting data err: ' + err);
    }
};

const updateStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const student = await Student.findByPk(id);
        if (!student) {
            return res.status(404).send('No user found with id: ' + id);
        }

        if (name) student.name = name;
        if (email) student.email = email;
        if (age) student.age = age;

        await student.save();
        res.status(200).json({
            message: 'Successfully updated student with id: ' + id,
            student
        });
    } catch (err) {
        res.status(500).send('Failed updating user! error: ' + err);
    }
};

const deleteStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const destroyed = await Student.destroy({
            where: {
                id
            }
        });

        if (!destroyed) {
            return res.status(404).send('No user found with id: ' + id);
        }

        res.status(200).send('Successfully deleted student with id: ' + id);
    } catch (err) {
        res.status(500).send('Failed to delete student! error: ' + err);
    }
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById
}