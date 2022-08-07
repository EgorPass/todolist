import React, { useContext } from "react"
import TodoContext from "../../TodoContext"

import "./taskEdit.css"

const TaskInput: React.FC = () => {
	const { taskText,	onChangeTaskList }: any = useContext(TodoContext)
	return 	<input 
		value = { taskText } 
		onChange = {onChangeTaskList}
		className = "listItem_section_taskEdit"
	/>
}

export default TaskInput