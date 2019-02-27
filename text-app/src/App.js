import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount(){
    fetch('/users').then(res=>res.json()).then(users=>this.setState({users}));
  }
  render() {
    return (
      <div className="App">
       <TextEntryArea />
        {this.state.users.map(user =>
          <div key={user}>{user}</div>
        )}
      </div>
    );
  }
}

class TextEntryArea extends Component {
  constructor(props){
    super (props);
    this.state = {value:"hello4"};
    this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef();
  }
  getInitialState(){
    return this.props.name;
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  
  handleClick(event) {
    console.log(this.getData().value);
    fetch('/users?dataVal='+this.getData().value, {method: 'post'}).then(res=>res.json()).then(users=>this.setState({users}));
  }

  getData(){
    return this.state;
  }
  render(){
    return(
      <form>
              <textarea value={this.state.value} ref={this.myRef} onChange={this.handleChange}/>
              <input onClick={this.handleClick} type="button" value="Undo"/>
      </form>
    );
  }
}

export default App;