import React from 'react';
import './App.css';
import './SelectCSVForm'
import SelectCSVForm from './SelectCSVForm';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <SelectCSVForm />
        <Button />
        <ToDoListItem></ToDoListItem>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Learn React
        </a>
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

class ToDoListItem extends React.Component {
  render() {
    return (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title">テスt</div>
        <div className="ToDoListItem-description">文章</div>
      </div>
    );
  }


}

export default App;
