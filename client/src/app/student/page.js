"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Page = () => {
	const [firstName, setFirstName] = useState("");
	const [familyName, setFamilyName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [notification, setNotification] = useState("");
	const [students, setStudents] = useState([]);

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const response = await axios.get("http://localhost:3000/students");
				setStudents(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchStudents();
	}, [notification]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (firstName && familyName && dateOfBirth) {
			const currentDate = new Date();
			const studentDateOfBirth = new Date(dateOfBirth);

			if (
				studentDateOfBirth instanceof Date &&
				!isNaN(studentDateOfBirth) &&
				studentDateOfBirth <= currentDate &&
				currentDate.getFullYear() - studentDateOfBirth.getFullYear() >= 10
			) {
				try {
					await axios.post("http://localhost:3000/students", {
						firstName,
						familyName,
						dateOfBirth,
					});

					setNotification("New student added successfully!");
					setFirstName("");
					setFamilyName("");
					setDateOfBirth("");
				} catch (error) {
					setNotification("Failed to add new student.");
					console.error(error);
				}
			} else {
				setNotification("Invalid date of birth or age requirement not met.");
			}
		} else {
			setNotification("Please fill in all the fields.");
		}
	};

	return (
		<div>
			<Navbar />
			<form onSubmit={handleSubmit} className="p-5 max-w-sm mx-auto">
				<label className="block mb-2">
					First Name:
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
					/>
				</label>
				<br />
				<label className="block mb-2">
					Family Name:
					<input
						type="text"
						value={familyName}
						onChange={(e) => setFamilyName(e.target.value)}
						className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
					/>
				</label>
				<br />
				<label className="block mb-2">
					Date of Birth:
					<input
						type="date"
						value={dateOfBirth}
						onChange={(e) => setDateOfBirth(e.target.value)}
						className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
					/>
				</label>
				<br />
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Submit
				</button>
			</form>
			<p className="text-center">{notification}</p>

			<div>
				<table className="table-auto mt-5 mx-auto">
					<thead>
						<tr>
							<th className="px-4 py-2">First Name</th>
							<th className="px-4 py-2">Family Name</th>
							<th className="px-4 py-2">Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{students.map((student) => (
							<tr key={student.id}>
								<td className="border px-4 py-2">{student.firstName}</td>
								<td className="border px-4 py-2">{student.familyName}</td>
								<td className="border px-4 py-2">{student.dateOfBirth}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Page;
