import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<img src={reactLogo} alt="react-logo" />
			<h2>ReactFacts</h2>
			<h3>React Course-Project 1</h3>
		</nav>
	);
}
