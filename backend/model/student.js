const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	familyName: {
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model("Student", studentSchema);
