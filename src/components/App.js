import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import EventsList from "./EventsList"
import AddEventForm from "./AddEventForm"
import AllTheData from "./AllTheData";
import { Route, Switch} from "react-router-dom"
 
function App() {
  const [ourOwn, setOurOwn] = useState([])
  const [monthNumber, setMonthNumber] = useState(1)
  const [thisMonth, setThisMonth] = useState([])

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

    function fetchDays() {
    fetch(`http://localhost:3000/${months[monthNumber]}`)
    .then((r) => r.json())
    .then((data) => {
      const sortedData = data.sort((a, b) => a.id - b.id);
      setOurOwn(sortedData)
    })
    }


  useEffect (() => {fetchDays()}, [setThisMonth])

  useEffect (() => {
    const fixedMonth = ourOwn;
    if (ourOwn[0].weekday === "Monday") {
      fixedMonth.splice(0, 0, "")
    }
    if (ourOwn[0].weekday === "Tuesday") {
      fixedMonth.splice(0, 0, "","")
    }
    if (ourOwn[0].weekday === "Wednesday") {
      fixedMonth.splice(0, 0, "", "", "")
    }
    if (ourOwn[0].weekday === "Thursday") {
      fixedMonth.splice(0, 0, "", "", "", "")
    }
    if (ourOwn[0].weekday === "Friday") {
      fixedMonth.splice(0, 0, "", "", "", "","")
    }
    if (ourOwn[0].weekday === "Saturday") {
      fixedMonth.splice(0, 0, "", "", "", "", "", "")
    }      
    setThisMonth(fixedMonth)
}, [thisMonth])

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
    if (monthNumber >= 0) {
      fetchDays()
      setMonthNumber(monthNumber - 1)
      
    }
  }

  function goToNextMonth() {
    if (monthNumber < 12) {
      fetchDays()
      setMonthNumber(monthNumber + 1)
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
          <Calendar ourOwn={thisMonth} goToPreviousMonth={goToPreviousMonth} goToNextMonth={goToNextMonth}/>
        </Route>
      </Switch>
      {/* <AllTheData /> */}
    </div>
  );
}

export default App;