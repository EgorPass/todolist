import React, { useContext } from "react"
import { IobjButonsTasks } from "../../typesDescription"
import TodoContext from "../../TodoContext"

const buttons: Array<IobjButonsTasks> = [
	{
		id: "all",
		title: "все"
	},
	{
		id: "active",
		title: "в работе"	
	},
	{
		id: "complited",
		title: "завершенные"
	},
]

const ButtonsFooter: React.FC = () => {
	
	const { onChangeVisible, filter }: any = useContext(TodoContext)

	return (
		<span className = "listItem_section_taskButtonsContainer_footer">

			{
				buttons.map(({id, title}: IobjButonsTasks) => {
					const className = filter === id ? "listItem_section_taskButtons_active" : "listItem_section_taskButtons"
							return (
										<button 
												key = {id}
												onClick = { onChangeVisible(id)}
				 								className = {className}

										>	
											<span>{title}</span> 
										
										</button>
											)}

				)
			}
		</span>
	)
}

export default ButtonsFooter