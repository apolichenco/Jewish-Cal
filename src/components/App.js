import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import EventsList from "./EventsList"
import AddEventForm from "./AddEventForm"
import AllTheData from "./AllTheData";
import { Route, Switch} from "react-router-dom"
 
function App() {
  const [ourOwn, setOurOwn] = useState([])

  useEffect (() => {
    fetch("http://localhost:3000/dates/")
    .then((r) => r.json())
    .then((data) => setOurOwn(data))
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/events">
          <EventsList />
        </Route>
        <Route path="/add-event">
          <AddEventForm />
        </Route>
        <Route exact path="/">
          <Calendar ourOwn={ourOwn}/>
        </Route>
      </Switch>
      <AllTheData />
    </div>
  );
}

export default App;