import React from "react"
import { IContext } from "./typesDescription"

const TodoContext = React.createContext<IContext>({});

export default TodoContext