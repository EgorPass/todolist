import React, { useContext  } from "react"
import { IButtonsTasks, IArrayButtonsTasks, IobjButonsTasks } from "../../typesDescription"
import TodoContext from "../../TodoContext"

import "./buttonsTasks.css"

const buttons: IArrayButtonsTasks = {
	task: [
					{
						title: "edit",
						mod: true,
					},
					{
						title: "del",
						mod: false,
					}
				],
	edit: [
					{
						title: "ok",
						mod: true,
					},
					{
						title: "cancel",
							mod: false,
					}
				],
}

const ButtonsTasks: React.FC<IButtonsTasks> = ({
												title,
												place,
												id
											}) => {

		const text = title;
		const {	onButtons_edit_delete, onAcceptChange }: any = useContext(TodoContext)
		const func: any = (place === "edit") ? onAcceptChange : onButtons_edit_delete;
		
		const edit = <span> &#9998; </span>
		const ok = <span> &#10004; </span>
		const del = <span>  &#10008; </span>

	return(
		<span className = "listItem_section_taskButtonsContainer">
			{
				 buttons[place].map( ( { title, mod }: IobjButonsTasks ) => {
										 return (
												<button 
													key = {title} 
													onClick = {func(mod, id, text)}
				 									className = "listItem_section_taskButtons"
				 								>
				 									{title === "edit" ? edit: title === "ok" ? ok : del}
				 								</button>)						
				 						})

			}
		</span>
	)

}


export default ButtonsTasks