import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";


import "./Signin.css"
const Signin = () => {
	
	const dispatch = useDispatch();
	const history = useNavigate();

	const [Inputs, setInputs] = useState({
		email:"",
		password:"",
	});
	const change = (e) => {
		e.preventDefault();
		const { name,value } = e.target;
		setInputs({ ...Inputs,[name]:value });
	}

	const submit = async (e) => {
		e.preventDefault();
		await axios.post(`${window.location.origin}/api/v1/signin`,Inputs)
		.then((response)=> {
			sessionStorage.setItem("id",response.data.others._id) // setting {object-id} of user after Sign-in in the session Storage
			dispatch(authActions.login());
			setInputs({
				email:"",
				password:"",
			})
			history("/todo")
		});
	}
	return (
		<div className="signup_page">
			<div className="container">
				<div className="row">
				<div className="col-lg-4 column col_right d-flex justify-content-center align-items-center">
						<h1 className="text-center signup_heading">
							Sign<br/>In
						</h1>
					</div>
					<div className="col-lg-8 column d-flex justify-content-center align-items-center">
						<div className="d-flex flex-column w-100 p-5">
							<input className="p-2 my-3 signup_input" type="email" name="email" placeholder="Enter your Email..." onChange={change} value={Inputs.email}/>
							<input className="p-2 my-3 signup_input" type="password" name="password" placeholder="Enter your Password..." onChange={change} value={Inputs.password}/>
							<button className="btn signup_btn" onClick={submit}><b>SIGNIN</b></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Signin;