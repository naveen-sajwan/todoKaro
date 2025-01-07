import React from 'react';
import home_img from "../../rb_1114.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
	return (
		<div className="container home d-flex justify-content-center align-items-center">
			<div className="container ">
				<h1>Organize your <br/>Work and life, finally</h1>
				<p><b>One of the best places to start to turn your life around<br/> is by doing whatever appears on your mental<br/> "I should" list. — Jim Rohn</b></p>
				<button className="Home-btn pulsate-fwd">
					<Link className="btn" to="/Todo">Make Todo List</Link></button>
			</div>
			<div className="container d-flex justify-content-center" id="Home_img">
				<img className="Home_img" src={home_img} alt="Home_img"/>
			</div>
		</div>
	)
}

export default Home;