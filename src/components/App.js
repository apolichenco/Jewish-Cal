import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import EventsList from "./EventsList"
import AddEventForm from "./AddEventForm"
import AllTheData from "./AllTheData";
import { Route, Switch} from "react-router-dom"
 
function App() {
  const [ourOwn, setOurOwn] = useState([])
  const [monthNumber, setMonthNumber] = useState(0)

  const months = [
    
  ]

  useEffect (() => {
    fetch("http://localhost:3000/Tishrei")
    .then((r) => r.json())
    .then((data) => {
      const sortedOurOwn = data.sort((a, b) => a.id - b.id);
      setOurOwn(sortedOurOwn)})
  }, [])

  function handleOurOwn(item) {
    const updatedDays = ourOwn.map((day) => {
      if (day.id === item.id) {
        return item
      }
      else {
        return day
      }
    })
    console.log(updatedDays)
    const sortedOurOwn = updatedDays.sort((a, b) => a.id - b.id);
    console.log(sortedOurOwn)
    setOurOwn(sortedOurOwn)
  }



  return (
    <div>
      <Header />
      <Switch>
        <Route path="/events">
          <EventsList ourOwn={ourOwn}/>
        </Route>
        <Route path="/add-event">
          <AddEventForm ourOwn={ourOwn} handleNew={handleOurOwn}/>
        </Route>
        <Route exact path="/">
          <Calendar ourOwn={ourOwn}/>
        </Route>
      </Switch>
      {/* <AllTheData /> */}
    </div>
  );
}

export default App;