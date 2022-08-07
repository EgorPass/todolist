import React, { useContext } from "react";
import TodoContext from "../TodoContext"

import "./inputField.css"

const InputField: React.FC = () => {

	const {	inputText, onChangeInput, onMainInputAccept	}: any = useContext(TodoContext)
	
	return (
		<div className = "listItem_section_inputField">
				<input
					type = "text" 
					name = "task"	
					value = {inputText}
					onChange = {onChangeInput}
					className = "listItem_section_interTask"
				/>
				<button 
					onClick = {onMainInputAccept(inputText)}
					className = 'listItem_section_acceptTask'
				>
					<span> &#9883; </span>
				</button>
		</div>
	)
}

export default InputField