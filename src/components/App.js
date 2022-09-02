import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import EventsList from "./EventsList"
import AddEventForm from "./AddEventForm"
// import ReactDOM from "react-dom";
import { Route, Switch} from "react-router-dom"
 
function App() {
  // const [days, setDays] = useState([])
  // const [ourOwn, setOurOwn] = useState([])
  
  // useEffect (() => {
  //   fetch("https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=off&nx=on&start=2022-09-25&end=2022-10-25&month=x&ss=on&mf=on&c=off&geo=zip&zip=33065&m=0&s=on&leyning=off&d=on&o=on&i=off")
  //   .then((r) => r.json())
  //   .then((data) => setDays(data.items))
  // }, [])

  useEffect (() => {
    fetch("http://localhost:3000/dates")
    .then((r) => r.json())
    .then((data) => setOurOwn(data))
  }, [])


  return (
    <div>
      <Header />
      <Switch>
        <Route path="/events">
          <EventsList daysData={days}/>
        </Route>
        <Route path="/add-event">
          <AddEventForm />
        </Route>
        <Route exact path="/">
          <Calendar daysData={days} ourOwn={ourOwn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;