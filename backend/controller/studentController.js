const Student = require("../model/student");

exports.getStudents = async (req, res) => {
	try {
		const students = await Student.find();
		res.status(200).json(students);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.addStudent = async (req, res) => {
	try {
		console.log(req.body);
		const { dateOfBirth } = req.body;

		// Calculate age
		const birthDate = new Date(dateOfBirth);
		const ageDifMs = Date.now() - birthDate.getTime();
		const ageDate = new Date(ageDifMs);
		const age = Math.abs(ageDate.getUTCFullYear() - 1970);

		// Check if age is at least 10
		if (age < 10) {
			return res.status(400).send("Student must be at least 10 years old.");
		}

		const newStudent = new Student(req.body);
		await newStudent.save();
		res.status(201).json(newStudent);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
};

// Add more functions for update, delete, etc. as needed
