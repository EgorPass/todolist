import { createStore } from "redux"
import { reducer } from "./reducers/reducer"
import { IReduxStore } from "../typesDescription"



const store = createStore( reducer )

export default store