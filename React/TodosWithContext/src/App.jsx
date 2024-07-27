import { useEffect, useState } from "react";

import "./App.css";
import "./contexts/index"
import { TodoProvider, useTodo } from "./contexts/TodosContext";
import TodosForm from "./components/TodosForm";
import TodosItems from "./components/TodosItems";
function App() {
 const [todos,setTodos]=useState([]);
 const addTodo = (todo)=>{
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
 }

 const editTodo =(id,todo)=>{
  setTodos((prev)=>prev.map((eachTodo)=> (eachTodo.id == id)? todo:eachTodo))
 } 
 const deleteTodo = (id)=>{
  setTodos((prev)=> prev.filter((eachTodo) => eachTodo.id != id))
 }

 const toggleComplete = (id)=>{
  setTodos((prev)=>prev.map((eachTodo)=> (eachTodo.id == id)? {...eachTodo,isCompleted:!eachTodo.isCompleted}: eachTodo))
 }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[]);
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);



  return (
    <>
    <TodoProvider value={{todos,addTodo,editTodo,toggleComplete,deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Go Beyond Your Limits
          </h1>
          <div className="mb-4">
              <TodosForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodosItems todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
    </>
  );
}

export default App;
