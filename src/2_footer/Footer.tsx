import React from "react";
import ButtonsFooter from ".././components/buttonsFooter/ButtonsFooter"
import "./footer.css"

const Footer: React.FC<{ taskLeft: number }> = ({taskLeft}) => (
		<footer className = "listItem_footer">
			<span className = "listItem_footer_taskLeft">
				Осталось задачь: {taskLeft}
			</span>
			
			<ButtonsFooter />
		</footer>
)

export default Footer