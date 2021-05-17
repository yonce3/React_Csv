import React, { useState } from 'react';
import './App.css';
import './SelectCSVForm'
import SelectCSVForm from './SelectCSVForm';
import styled from 'styled-components';
import ToDoList from './ToDoList';
import ToDoTextField from './ToDoTextField';
import ToDoItem from './ToDoItem';

function App() {

  interface Todo {
    id: Number,
    todo: String
  }

  const [todo, setTodo] = useState("");
  const [todos, setList] = useState(Array<Todo>());
  const [todoCount, addCount] = useState(0);
  
  // const removeTodo = () => {
  //    todo
  // }

  const AddTodo = (title: String) => {
    addCount(todoCount + 1)
    todos.push({ id: todoCount, todo: title });
    setList({ ...todos });
  }

  function Hello() {
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
        <Hello />
        {/* <SelectCSVForm /> */}
        {/* <div>
          <form onSubmit={handleClick}>
            <input value={todo} onChange={(event) => setTodo(event.target.value)}></input>
            <input type="submit" value="Add Todo" />
          </form>
        </div> */}
        <ToDoTextField addClick={ AddTodo }/>
        <ToDoList todoItems={ todos }/>
      </header>
    </div>
  );
}

function Title() {
  return (
    <h2>ToDo App</h2>
  )
}

class Button extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState: { isToggleOn: any; }) => ({
      isToggleOn: !prevState.isToggleOn
    }));
   }

  render() {
    return <button onClick={this.handleClick}>
      {this.state.isToggleOn ? "テスト" : "Hello"}
      </button>
  }
}

export default App;
