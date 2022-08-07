import React, { useContext } from "react"
import { ITaskList  } from "../../typesDescription"
import TodoContext from "../../TodoContext"


import "./taskTitle.css"

const TaskTitle: React.FC<ITaskList> = ({ title, id, status }) => {

	const {	onTaskComplite }: any = useContext(TodoContext)

	return (
		<label className="checkbox style-d">
		  <input 
		  	type="checkbox" 
		  	onClick = {onTaskComplite(id)}
		  	defaultChecked = {status === "active" ? false : true }
		  />
		  <span className="checkbox__checkmark"></span>
		  <span className="checkbox__body">{title}</span>
		</label>
	)

}

export default TaskTitle