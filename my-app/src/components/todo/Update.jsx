import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Update = ({ Display,update}) => {

	useEffect(() => {
		setInputs({
			title: update.title,
			body: update.body,
		})
	}, [update])

	const [Inputs, setInputs] = useState({
		title:"",
		body:"",
	})
	const change = (e)=>{
		const {name,value} = e.target;
		setInputs({...Inputs,[name]:value});
	}

	const submit = async() => {
		await axios
		.put(`${window.location.origin}/api/v2/updateTask/${update._id}`,Inputs)
		.then((response)=>{
			toast.success("Your Task Has Been Updated");
		})
		console.log(Inputs);
		Display("none");
	}

	return (
		<div className="p-5 d-flex justify-content-center align-items-start flex-column">
			<h3 className="text-left">Update Your task</h3>
			<input 
				type="text" 
				name="title"
				value={Inputs.title}
				className="my-3 p-2 w-100 todo-inputs" 
				placeholder="Update Your Title..."
				onChange={change}
			/>
			<textarea 
				name="body"
				value={Inputs.body}
				className="todo-inputs my-2 p-3 w-100" 
				placeholder="Update Your Body..."
				onChange={change}
				></textarea>
			<div>
				<button className="btn btn-dark" onClick={submit}>UPDATE</button>
				<button className="btn btn-danger mx-2" onClick={()=>Display("none")}>CLOSE</button>
			</div>
		</div>
	)
}

export default Update;


