import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} key={todo.id} />
        ))} 
      </ul> 
      <hr/>
    </div>
  )
}

// const [todos, setTodos] = useState([
  //   {id: "1", title: "Learn React"},
  //   {id: "2", title: "Learn Node"}])
  // const [todo, setTodo] = useState({id: "-1", title: "Learn Mongo"}); //initial the todo thing that was chosen
  // const addTodo = (todo: any) => {
  //   const newTodos = [...todos, {...todo,
  //     id: new Date().getTime().toString()}] //let the id equals to the date time, make sure the only one
  //   setTodos(newTodos);
  //   setTodo({id: "-1", title:""}); //the form should be empty after updating or add todos
  // };
  // const deleteTodo = (id: string) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };
  // const updateTodo = (todo: any) => {
  //   const newTodos = todos.map((item) => (item.id === todo.id? todo: item))
  //   setTodos(newTodos);
  //   setTodo({id: "-1", title:""});
  // };