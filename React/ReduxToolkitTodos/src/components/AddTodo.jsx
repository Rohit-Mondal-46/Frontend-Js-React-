import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,updateTodo } from "../features/todo/todoSlice";
import { removeEditingTodo } from "../features/todo/editingTodoSlice";
function AddTodo() {
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const isEditingTodo = useSelector((state)=>state.editingTodo.toBeEditedTodo)
    useEffect(() => {
      if(isEditingTodo){
        setInput(isEditingTodo.text)
      }
      else{
        setInput("")
      }
    }, [isEditingTodo])
    
    const addTodoHandler = (e)=>{
        e.preventDefault();
        if(isEditingTodo){
          dispatch(updateTodo({id:isEditingTodo.id,text:input}))
          dispatch(removeEditingTodo(null));
        }else{
          dispatch(addTodo(input));
        }
        setInput("");
    }
    
    
  return (
    <>
      <form onSubmit={addTodoHandler} className="form-inline">
        
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Add todo..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mb-2">
          {isEditingTodo ? "Update":"Submit"}
        </button>
      </form>
    </>
  );
}

export default AddTodo;
