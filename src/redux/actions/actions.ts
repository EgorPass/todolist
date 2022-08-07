import { ADD_TASK_TO_LIST,	REMOVE_TASK_TO_LIST, CHANGE_VISIBLE_TASK, CHANGE_STATUS, CHANGE_INPUT_TO_LIST	} from "../../constants"
import { IActionSet_id_title, IActionSet_id, IActionSet_visible, IActionSet_task } from "../../typesDescription"

export const ADD_TASK: IActionSet_task = (title) => ({
		type: ADD_TASK_TO_LIST,
		task: {
			id: Date.now(),
			title,
			status: "active",
			edit: false,
		}
	})

export const SET_TASK_TO_EDIT: IActionSet_id_title = (id, title) => ({
		type: CHANGE_INPUT_TO_LIST,
		id,
		title,
	})

export const REMOVE_TASK: IActionSet_id = (id) => ( { type: REMOVE_TASK_TO_LIST,	id } )

export const CHANGE_VISIBLE: IActionSet_visible = (visible) => ( { type: CHANGE_VISIBLE_TASK,	visible } )

export const CHANGE_TASK_STATUS: IActionSet_id = (id) => ( { type: CHANGE_STATUS, id } )