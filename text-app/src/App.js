import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{

      }],
    }
  }
  render() {
    return (
      <div className="App">
        <TextEntryArea />
        <Undo />
      </div>
    );
  }
}

class TextEntryArea extends Component {
  render(){
    return(<textarea>hello</textarea>);
  }
}

class Undo extends Component {
  render(){
    return(<button>Undo</button>);
  }
}

export default App;
