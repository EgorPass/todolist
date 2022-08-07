import { ADD_TASK_TO_LIST, REMOVE_TASK_TO_LIST, CHANGE_VISIBLE_TASK, CHANGE_STATUS, CHANGE_INPUT_TO_LIST } from "../../constants"
import { IReduxStore, IReducer,	ITaskList } from "../../typesDescription"

const state: IReduxStore = {
	visible: "all",
	tasks : [
		{
			id: 1,
			edit: false,
			status: "complited",
			title: "Задача №1"
		},
		{
			id: 2,
			edit: false,
			status: "active",
			title: "Задача №2"
		},
		{
			id: 3,
			edit: false,
			status: "complited",
			title: "Задача №3"
		},
		{
			id: 4,
			edit: false,
			status: "active",
			title: "Задача №4"
		},
		{
			id: 5,
			edit: false,
			status: "active",
			title: "И ОООООООООООООЧЕНЬДЛИНННННННАЯЯЯЯЯЯЯЯЗадача №5"
		},

	],
}

export const reducer: IReducer = (store = state, {type, task, id, title, visible}) => {
	switch(type) {

		case ADD_TASK_TO_LIST: return {
			...store,
			tasks: [...store.tasks, task]
		}

		case REMOVE_TASK_TO_LIST: return {
			...store,
			tasks: [...store.tasks.filter(	(it: ITaskList) => {
				if(it.id === id) return false;
				else return true
			} )]
		}

		case CHANGE_VISIBLE_TASK: return {
			...store,
			visible,
		}

		case CHANGE_INPUT_TO_LIST: return {
			...store,
			tasks: [...store.tasks.map((it: ITaskList)=>{
				if(it.id === id) {
						return {
										id: it.id,
										title,
										status: it.status,
										edit: !it.edit,
									}
				}
				else return it
			})]
		}

		case CHANGE_STATUS: return {
			...store,
			tasks: [...store.tasks.map((it: ITaskList)=>{
				if(it.id === id) {
					const status = it.status === "active" ? "complited": "active";
						return {
										id,
										title: it.title,
										status,
										edit: it.edit,
									}
				}
				else return it
			})]
		}


		default: return store
	}

}


