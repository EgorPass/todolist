import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"

import TodoContext from "../TodoContext"
import { 
		IContext,  					IInputTask, 				ITaskList, 		
		IReduxStore, 				ItaskLeft,					IInputEventFunc, 	
		IButtonStringFuncClouse,	IButtonNumberFuncClouse,	IButtonMultyFuncClouse,
																						} from "../typesDescription"

import {ADD_TASK, REMOVE_TASK, CHANGE_VISIBLE, SET_TASK_TO_EDIT, CHANGE_TASK_STATUS} from ".././redux/actions/actions"

import Header from ".././2_header/Header"
import Footer from ".././2_footer/Footer"
import Section from ".././2_section/Section"

import "./container.css"

const Container: React.FC = () => {
	
	const {tasks, visible} = useSelector(state => state) as IReduxStore
	const dispatch = useDispatch()
	const [inputText, setInputText] = useState<string>("")
	const [inputTask, setTaskList] = useState<IInputTask>({
		title: '',
		mod: false,
	})

	const onChangeInput: IInputEventFunc = (e) => {
		const {target: {value}}: any  = e
		setInputText(inputText=>inputText = value)
	}

	const onChangeTaskList: IInputEventFunc = (e) => {
		const {target: {value}}: any = e
		setTaskList({...inputTask, title: value} )
	}

	const onMainInputAccept: IButtonStringFuncClouse = (title) =>  () => {
			if(!title) return;

		dispatch(ADD_TASK(title) )
		setInputText(inputText=> inputText = "")
	}

	const onChangeVisible: IButtonStringFuncClouse = (title) => () => dispatch(CHANGE_VISIBLE(title) )

	const onTaskComplite: IButtonNumberFuncClouse = (id) => () => dispatch(CHANGE_TASK_STATUS(id) ) 

	const onAcceptChange: IButtonMultyFuncClouse = (status, id, text) => () => {
		let { title }: IInputTask = inputTask;
		
			if(status) {
				text = title ? title : '';
			}

			if(!text) return;

		dispatch(SET_TASK_TO_EDIT(id, text))
		setTaskList({...inputTask, mod: false, title: ''});
	}

	const onButtons_edit_delete: IButtonMultyFuncClouse = (status, id, text) => () => {
		if(!status) dispatch(REMOVE_TASK(id))
		else {
			if(inputTask.mod) return;
					
				setTaskList({...inputTask, mod: true, title: text});
				dispatch(SET_TASK_TO_EDIT(id, text))
			}
	}

	const taskLeft: ItaskLeft = () => tasks.filter(({status}: ITaskList)=> status === "active" ? true : false ).length

	const context: IContext = { 
								taskList: tasks,	 	filter: visible,	
								onTaskComplite,			onChangeTaskList,			
								inputText,				onChangeInput,		
								onMainInputAccept,		onChangeVisible,
								onAcceptChange,			onButtons_edit_delete,	
														taskText: inputTask.title,
																					}

	return (

		<article className = "listItem_container">
			<TodoContext.Provider value = {	context	} >

					<Header text = {"Cписок задач"}/>
					
				
					<Section />
				
					<Footer taskLeft = {taskLeft()}/>

			</TodoContext.Provider>
		</article>
	)
}

export default Container;