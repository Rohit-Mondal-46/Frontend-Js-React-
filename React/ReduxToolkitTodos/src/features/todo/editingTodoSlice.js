import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    toBeEditedTodo:null
}
export const editingTodoSlice = createSlice({
    name:'editingTodo',
    initialState,
    reducers:{
        setEditingTodo: (state, action) => {
            // return {...state.toBeEditedTodo,id:action.payload.id,text:action.payload.text}
            state.toBeEditedTodo = action.payload;
        },
        removeEditingTodo:(state,action)=>{
            state.toBeEditedTodo = action.payload;
        }
    }
})

export const {setEditingTodo,removeEditingTodo} = editingTodoSlice.actions
export default editingTodoSlice.reducer