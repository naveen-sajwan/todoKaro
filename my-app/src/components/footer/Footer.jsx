import React from 'react';
import "./Footer.css";

const Footer = () => {

const d = new Date();
let year = d.getFullYear();
	return (
		<div className="container-fluid m-0 footer_edit p-2 d-flex justify-content-center align-items-center text-white">
			<h4>Todo &nbsp;</h4><p>&copy;TECHNICALBABA {year}</p>
		</div>
	)
}

export default Footer