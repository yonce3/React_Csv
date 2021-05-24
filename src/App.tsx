import React, { useState } from 'react';
import './App.css';
import './SelectCSVForm'
import SelectCSVForm from './SelectCSVForm';
import styled from 'styled-components';
import ToDoList from './ToDoList';
import ToDoTextField from './ToDoTextField';
import ToDoItem from './ToDoItem';
import { render } from '@testing-library/react';

interface Todo {
  id: Number,
  todo: String
}

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setList] = useState<Array<Todo>>(null);
  const [todoCount, setCount] = useState(0);
  
  // const removeTodo = () => {
  //    todo
  // }

  const AddTodo = (title: String) => {
    setCount(todoCount + 1)
    todos.push({ id: todoCount, todo: title });
    setList({ ...todos });
  }

  function TodoCount() {
    return (
      <h1>{todoCount}</h1>
    )
  }

  function handleClick() {
    AddTodo(todo)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <TodoCount />
        {/* <SelectCSVForm /> */}
        {/* <div>
          <form onSubmit={handleClick}>
            <input value={todo} onChange={(event) => setTodo(event.target.value)}></input>
            <input type="submit" value="Add Todo" />
          </form>
        </div> */}
        <ToDoTextField addClick={AddTodo} />
        <TodoList todos={todos} />
        {/* <ToDoList todoItems={ todos }/> */}
      </header>
    </div>
  );
}

function Title() {
  return (
    <h2>ToDo App</h2>
  )
}

function TodoList(props: Array<any>) {
  const todos = props as Array<Todo>
  const todoItems = todos.map((item) =>
    <ToDoItem item={item} />
  );
  return (
    <div>{ todoItems } </div>
  );
}

export default App;
