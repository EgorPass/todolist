import React from "react"

import InputField from "./InputField"
import ListItem from "./ListItem"

import "./section.css"

const Section: React.FC = () => (
		<section className = "listItem_section">
			<InputField  />
			<ListItem  />
		</section>
)


export default Section;
