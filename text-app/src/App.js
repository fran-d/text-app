import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: []}
  pullData = this.pullData.bind(this);
  handleClick = this.handleClick.bind(this);

  componentDidMount(){
    this.pullData();
  }

  handleClick(event){
    fetch('/users',{method: 'delete'}).then(res=>res.json()).then(users=>this.setState({users}));
    this.pullData();
  }
  pullData(){
    fetch('/users').then(res=>res.json()).then(users=>this.setState({users}));
  }
  render() {
    return (
      <div className="App">
       <TextEntryArea action={this.pullData} />
       <div className="messages-header">Saved Messages</div>
        {this.state.users.map((user, i) =>
          <div id={i}>{user}</div>
        )}
        <input onClick={this.handleClick} type="button" value="Pop"/>
      </div>
    );
  }
}

class TextEntryArea extends Component {
  constructor(props){
    super (props);
    this.state = {value:"Enter Text Here"};
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
    this.props.action();
  }

  getData(){
    return this.state;
  }
  render(){
    return(
      <form>
              <textarea value={this.state.value} ref={this.myRef} onChange={this.handleChange}/><br/>
              <input onClick={this.handleClick} type="button" value="Save"/>
      </form>
    );
  }
}

export default App;