import React from "react"
import "./header.css"

const Head: React.FC<{text: string}> = ({text}) => (
	<header className = "listItem_header">
		<h2 className = "listItem_header_head">{text}</h2>
	</header>
)

export default Head