import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";

const TodoCards = ({
	title,
	body,
	id,
	Delete,
	Display,
	updateId,
	toBeUpdate,
}) => {
	return (
		<div className="p-3 todo-card">
			<div>
				<h5>{title}</h5>
				<p>{body}</p>
			</div>
			<div className="d-flex justify-content-between">
				<div className="d-flex justify-content-center align-items-center px-2 py-1 card-icon-head"
				onClick={()=>{
					Display("block");
					toBeUpdate(updateId);
				}}>
					<MdUpdate className="card-icons update"/>Update
				</div>
				<div className="d-flex justify-content-center align-items-center px-2 py-1 card-icon-head" 
					onClick={()=> Delete(id)}
				>
					<MdDelete className="card-icons del"/>Delete
				</div>
			</div>

		</div>
	)
}

export default TodoCards;