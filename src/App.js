import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Form />
      <Router>
        <Link to="home" >HOME</Link>
        <Link to="about" >About</Link>
        <Link to="Form" >register</Link>

        <Switch>
          <Route path="/Form">
          <register/>
          </Route>

        </Switch>
</Router>
    </div>

  );
}

export default App;
