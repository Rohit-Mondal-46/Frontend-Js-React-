import { useContext,createContext } from "react"
export const TodosContext = createContext({
    todos:[
        {
            id:46,
            text:"1st work",
            isCompleted:false
        }
    ],
    addTodo:(text)=>{},
    editTodo:(id,text)=>{},
    toggleComplete:(id)=>{},
    deleteTodo:(id)=>{},
})

export const useTodo = ()=>{
    return useContext(TodosContext);
}

export const TodoProvider = TodosContext.Provider;                                                                                                                                                                                                                                                                                                                                           