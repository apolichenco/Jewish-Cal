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
    "Tishrei",
    "Cheshvan",
    "Kislev",
    "Tevet",
    "Shvat",
    "Adar",
    "Nissan",
    "Iyar",
    "Sivan",
    "Tammuz",
    "Av",
    "Elul"
  ]

  // useEffect (() => {
    function fetchDays() {
          fetch(`http://localhost:3000/${months[monthNumber]}`)
    .then((r) => r.json())
    .then((data) => {
      console.log(data)
      const sortedData = data.sort((a, b) => a.id - b.id);
      setOurOwn(sortedData)
      
    })
    }
console.log(ourOwn)
  // }, [setMonthNumber])

  useEffect (() => {fetchDays()}, [])

  function handleOurOwn(item) {
    const updatedDays = ourOwn.map((day) => {
      if (day.id === item.id) {
        return item
      }
      else {
        return day
      }
    })
    const sortedOurOwn = updatedDays.sort((a, b) => a.id - b.id);
    setOurOwn(sortedOurOwn)
  }

  function goToPreviousMonth() {
    if (monthNumber > 0) {
      setMonthNumber(monthNumber - 1)
      fetchDays()
    }
  }

  function goToNextMonth() {
    if (monthNumber > 0) {
      setMonthNumber(monthNumber = 1)
      fetchDays()
    }
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
          <Calendar ourOwn={ourOwn} goToPreviousMonth={goToPreviousMonth} goToNextMonth={goToNextMonth}/>
        </Route>
      </Switch>
      {/* <AllTheData /> */}
    </div>
  );
}

export default App;