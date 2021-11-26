import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import Main from "./Main.js"
import Delete from "./Delete.js"
import Insert from "./Insert.js"
import Update from "./Update.js"
import Search from "./Search.js"

class App extends React.Component {  
  constructor() {
    super();
    this.state = {
      screen: 'main'
    };
    this.handleScreenChange = this.handleScreenChange.bind(this);
  }

  handleScreenChange(e) {
    this.setState({
      screen: e
    })
  }

  render() {
  let to_display = < Main screenChange = {this.handleScreenChange}/>
  if (this.state.screen === 'Insert') {
    to_display = <Insert screenChange = {this.handleScreenChange}/>;
  } else if (this.state.screen === 'Delete') {
    to_display = <Delete screenChange = {this.handleScreenChange}/>;
  }
  else if (this.state.screen === 'Update') {
    to_display = <Update screenChange = {this.handleScreenChange}/>;
  } else if (this.state.screen === 'Search') {
    to_display = <Search screenChange = {this.handleScreenChange}/>;
  }
  return (to_display);
}
}

export default App;