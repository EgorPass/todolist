import React from "react"
import { ITaskList } from "../../typesDescription"

import TaskTitle from ".././taskTitle/TaskTitle"
import TaskInput from ".././taskInput/TaskInput"
import ButtonsTasks from ".././buttonsTasks/ButtonsTasks"

import "./taskList.css"

const TaskList: React.FC<ITaskList> = ({ id, title,	status,	edit }) => (
		<li className = "listItem_section_list">

			{ 
				!edit && 
					<> 
					 	<TaskTitle title = {title} id = {id} status = {status}/> 
				 		<ButtonsTasks place = "task" title = {title} id = {id} /> 
					</>				
			}
							
			{ 
				edit && 
					<>
						<TaskInput /> 								
						<ButtonsTasks place = "edit" title = {title} id = {id} /> 
					</>
			}
		

		</li>


)


export default TaskList