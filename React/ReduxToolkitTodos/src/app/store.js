import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import editingTodoReducer from '../features/todo/editingTodoSlice'
export const store = configureStore({
    reducer:{
        todo:todoReducer,
        editingTodo:editingTodoReducer
    }, 
});
