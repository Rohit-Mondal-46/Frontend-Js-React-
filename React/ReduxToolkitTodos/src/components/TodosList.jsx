import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, } from '../features/todo/todoSlice';
import { setEditingTodo } from '../features/todo/editingTodoSlice';

function TodosList() {
    const todos = useSelector((state)=>state.todo.todos);
    const dispatch = useDispatch();
  return (
    <>
        {todos.map((todo)=> (
            <li key={todo.id}>{todo.text}
                <button onClick={(e)=>dispatch(removeTodo(todo.id))}>X</button>
                <button onClick={(e)=>dispatch(setEditingTodo({id:todo.id,text:todo.text}))}>Update</button>
            </li>
        ))}
    </>
  )
}

export default TodosList;