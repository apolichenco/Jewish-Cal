import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import Form from './Form';
import Header from './Header';
import List from './List';

function App() {
  return (
    <div className="App">
      <Header />   
      <Switch>
        <Route path="/form">   
          <Form />
        </Route>
        <Route path="/list">      
          <List />
        </Route>
      </Switch>
    </div>  
  );
}

export default App;
