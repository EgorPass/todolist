interface I_title_id {
	readonly id?: number | string,
	readonly title?: string,
}

interface I_status_edit {
	readonly status?: string,
	readonly edit?: boolean,
}

interface I_place {
	readonly place: string,
}

interface I_mod {
	readonly mod?: boolean,
}

interface I_action_param {
	readonly type: string,
	readonly task?: ITaskList,
	readonly visible?: VisibleStatus
}

type VisibleStatus = "all" | "complite" | "active";

export type ITaskList = I_title_id & I_status_edit
export type IButtonsTasks = I_title_id & I_place
export type IobjButonsTasks = I_title_id & I_mod
export type IParamToReducer = I_title_id & I_action_param
export type IInputTask = I_title_id & I_mod

export interface IReduxStore {
	readonly visible: VisibleStatus,
	readonly tasks: Array<ITaskList>,
}

export interface IArrayButtonsTasks {
	readonly [prop: string]: Array<IobjButonsTasks>,
}

export interface IReducer {
	<T>(store: any, action: IParamToReducer): T
}

////////////////



export interface IContext {
	readonly [prop: string]: any
}



///////////////

export interface IActionSet_task {
	(title: string): { type: string, task: ITaskList	}
}

export interface IActionSet_id_title {
	<T, K>(id: T, title: K): {	type: string, id: T, title: K	}
}

export interface IActionSet_id {
	<T>(id: T): {	type: string,	id: T}
}

export interface IActionSet_visible {
	<T>(visible: T): { type: string, visible: T }
}

export type ItaskLeft = ()=> number
export type IInputEventFunc = (e: React.FormEvent<HTMLInputElement> ) => void
export type IButtonEventFunc = (e: React.MouseEvent<HTMLButtonElement> ) => void
export type IButtonStringFuncClouse = (title: string) => IButtonEventFunc
export type IButtonNumberFuncClouse = (id: number) => IButtonEventFunc
export type IButtonMultyFuncClouse = (status: string, id: number, text: string) => IButtonEventFunc