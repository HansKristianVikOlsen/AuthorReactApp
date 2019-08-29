import React, { Component, useState } from "react";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import AuthorsPage from "./AuthorsPage";
import AuthorBooks from "./AuthorBooks";
import AddAuthor from "./AddAuthor";
//import logo from './logo.svg';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/authors" component={AuthorsPage} />
        <Route path="/author/:slug" component={AuthorBooks} />
        <Route path="/addauthor" component={AddAuthor} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;


class App extends Component {


  
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded:false,
    }
  }

  componentDidMount(){

  fetch('http://localhost:6058/api/authors')
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded: true,
      items: json,
    })
  });

  }

  render() {

 
  var {isLoaded, items} = this.state;

  if(!isLoaded) {
    return<div>Loading...</div>
  }

    return (
    <div className="App">
      Data has been loaded
      </div>
  );
}
}
export default App;

*/
