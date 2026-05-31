const express = require('express');
const router = express.Router();
const studentControllers = require("../controllers/studentController");

router.post('/', studentControllers.addStudent);
router.get('/', studentControllers.getAllStudents);
router.get('/:id', studentControllers.getStudentById );
router.put('/:id', studentControllers.updateStudentById);
router.delete('/:id', studentControllers.deleteStudentById);

module.exports = router;
