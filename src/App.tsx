import React, { useState } from 'react';
import './App.css';
import './SelectCSVForm'
import SelectCSVForm from './SelectCSVForm';
import styled from 'styled-components';
import ToDoList from './ToDoList';
import { isConstructorDeclaration } from 'typescript';
import ToDoTextField from './ToDoTextField';

function App() {
  const sampleList = new Array("String", "Hello", "hoge");

  const [todo, addTodo] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <SelectCSVForm />
        <ToDoTextField />
        <Button />
        <ToDoList todoItems={ todo }/>
      </header>
    </div>
  );
}

class Title extends React.Component {
  render() {
    return <h2>ToDoアプリ</h2>
  }
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
