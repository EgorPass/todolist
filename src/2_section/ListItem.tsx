import React, { useContext } from "react";
import { ITaskList } from "../typesDescription"
import TodoContext from "../TodoContext"

import TaskList from ".././components/taskList/TaskList"

import "./listItem.css"

const ListItem: React.FC = () => {

		const {	filter, taskList }: any = useContext(TodoContext)

	return (
			<ul className = "listItem_section_listField">
					{taskList.map(({id, title, status, edit}: ITaskList)=>	{

							if (filter === "all" || filter === status) {

								return (
										<TaskList 
											key = {id}
											id = {id}
											title = {title}
											status = {status}
											edit = {edit}
										/>
								)	
							} 
							else return null
						}
					)}			
			</ul>
)
}
export default ListItem