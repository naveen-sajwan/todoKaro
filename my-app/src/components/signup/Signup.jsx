import React,{useState}from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./Signup.css";
const Signup = () => {
	const history = useNavigate();
	const [Inputs, setInputs] = useState({
		email:"",
		username:"",
		password:"",
	});
	const change = (e) => {
		const { name,value } = e.target;
		setInputs({ ...Inputs,[name]:value });
	}

	const submit = async (e) =>{
		e.preventDefault();
		await axios.post(`${window.location.origin}/api/v1/register`,Inputs)
		.then((response)=> {
			console.log(response);
			if(response.data.msg === "SignedUp Successfully"){
				alert(response.data.msg);
				setInputs({
					email:"",
					username:"",
					password:"",
				});
				history("/signin"); // redirects the signUp Page to SignIn Page
			}else{
				toast.error(response.data.msg);
			}
		});
	}
	return (
		<div className="signup_page">
			<div className="container">
			<ToastContainer/>
				<div className="row">
					<div className="col-lg-8 column d-flex justify-content-center align-items-center">
						<div className="d-flex flex-column w-100 p-5">
							<input className="p-2 my-3 signup_input" type="email" name="email" placeholder="Enter your Email..." onChange={change} value={Inputs.email}/>
							<input className="p-2 my-3 signup_input" type="text" name="username" placeholder="Enter your Username..." onChange={change} value={Inputs.username}/>
							<input className="p-2 my-3 signup_input" type="password" name="password" placeholder="Enter your Password..." onChange={change} value={Inputs.password}/>
							<button className="btn signup_btn" onClick={submit}><b>SIGNUP</b></button>
						</div>
					</div>
					<div className="col-lg-4 column col_left d-flex justify-content-center align-items-center">
						<h1 className="text-center signup_heading">
							Sign<br/>Up
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Signup; 