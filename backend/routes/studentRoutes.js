const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.get("/", studentController.getStudents);
router.post("/", studentController.addStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
