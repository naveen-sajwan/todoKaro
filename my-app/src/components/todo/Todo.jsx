import React,{ useState,useEffect } from 'react';
import Update from "./Update";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoCards from "./TodoCards";
import "./Todo.css";
import axios from "axios";

let toUpdateArray = []; // this empty array is defined for update function

const Todo = () => {
	let id = sessionStorage.getItem("id");
	const [showBody,setShowBody] = useState(false);
	const [array, setArray] = useState([]);
	const [Inputs,setInputs] = useState({ title:"",body:"" });
	const change = (e)=>{
		e.preventDefault();
		const {name,value} = e.target;
		setInputs({...Inputs,[name]: value});
	}

	const submit = async(e)=>{
		e.preventDefault();
		if(Inputs.title === "" || Inputs.body === ""){
			return toast.error("Plz! fill the fields first");
		}else{
			if(id){
				await axios.post(`${window.location.origin}/api/v2/addTask`,{ title:Inputs.title,body:Inputs.body,id:id })
				.then((response)=>{
					// return console.log(response);
				})
				setInputs({title:"",body:""});
				toast.success('Your Task is Created');
   			}else{
				setArray([...array,Inputs]);
				setInputs({title:"",body:""});
				console.log(array);
				toast.success('Your Task is Created');
				toast.error('But Not Saved, Please! SignUp first');
			}
		}
	}
	const Delete = async(cardid) => {
		// console.log(id);
		if(id){
		await axios
		.delete(`${window.location.origin}/api/v2/deleteTask/${cardid}`, { 
			data:{id:id},
		})
		.then((response)=>{
			toast.success('Your Task is Deleted');
		})
		}else{
			toast.error("Plz! SignUP First 😅")
		}
	}; 

	const Display = (value)=>{
		// console.log(value);
		document.getElementById("todo-update").style.display = value;
	};
	const update =(value)=>{
		toUpdateArray = array[value];
	};

	useEffect(() => {
		if(id){

			const fetchTask = async() => {
				await axios
				.get(`${window.location.origin}/api/v2/getTasks/${id}`)
				.then((response)=>{
					return setArray(response.data.list);
				})
			};
			fetchTask();
		}
	},[submit]);

	return (
		<div className="todo">
		<ToastContainer/>
			<div className="todo-update" id="todo-update">
				<div className="container my-4">
					<Update Display={Display} update={toUpdateArray}/>
				</div>
			</div>
			<div className="todo-main container d-flex justify-content-center align-items-center">
				<div className="d-flex flex-column todo-inputs-div w-50 p-2">
					<input 
						type="text" 
						name="title" 
						placeholder="Title..." 
						onClick={() => setShowBody(!showBody)} 
						className="my-2 p-1 todo-inputs"
						onChange={change}
						value={Inputs.title}
					/>
					<textarea 
						type="text" 
						name="body" 
						placeholder="Body..." 
						id={showBody ? "display_body": "textarea"}
						onChange={change} 
						value={Inputs.body}
						className="my-2 p-2 todo-inputs">
					</textarea>
					<button className="btn signup_btn" onClick={submit}>ADD</button>
				</div>
			</div>
			<div className="todo-body">
				<div className="container-fluid">
					<div className="row">	
							{array && array.map((item,index)=>{
								return(
									<div className="col-lg-3 col-10 mx-5 my-2" key={index} >
										<TodoCards 	
										title={item.title} 
										body={item.body} 
										id={item._id}  
										Delete={Delete}
										Display={Display}
										updateId={index}
										toBeUpdate={update}
									/>
									</div>
								)
							})}
					</div>
					
				</div>
			</div>
		</div>
	)
}
export default Todo;






