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
    .then((data) => {
      const sortedOurOwn = data.sort((a, b) => a.id - b.id);
      setOurOwn(sortedOurOwn)})
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/events">
          <EventsList ourOwn={ourOwn}/>
        </Route>
        <Route path="/add-event">
          <AddEventForm ourOwn={ourOwn}/>
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