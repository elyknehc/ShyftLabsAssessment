"use client";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<main className="flex flex-col items-center justify-between p-24">
				<div>Welcome to the Student Result Management System!</div>
				<div>
					Click on any of the links on the navigation bar to get started.
				</div>
			</main>
		</div>
	);
}
