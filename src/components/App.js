import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import EventsList from "./EventsList"
import AddEventForm from "./AddEventForm"
import { Route, Switch} from "react-router-dom"
 
function App() {
  const [ourOwn, setOurOwn] = useState([])
  const [monthNumber, setMonthNumber] = useState(0)

  const months = [
    "Tishrei",
    "Cheshvan",
    "Kislev",
    "Tevet",
    `Sh'vat`,
    "Adar",
    "Nisan",
    "Iyyar",
    "Sivan",
    "Tamuz",
    "Av",
    "Elul"
  ]

  useEffect (() => {
    fetch(`http://localhost:3000/${months[monthNumber]}`)
    .then((r) => r.json())
    .then((data) => {
      const sortedData = data.sort((a, b) => a.id - b.id)
      if (sortedData[0].weekday === "Monday") {
        sortedData.splice(0, 0, "")
      }
      if (sortedData[0].weekday === "Tuesday") {
        sortedData.splice(0, 0, "","")
      }
      if (sortedData[0].weekday === "Wednesday") {
        sortedData.splice(0, 0, "", "", "")
      }
      if (sortedData[0].weekday === "Thursday") {
        sortedData.splice(0, 0, "", "", "", "")
      }
      if (sortedData[0].weekday === "Friday") {
        sortedData.splice(0, 0, "", "", "", "","")
      }
      if (sortedData[0].weekday === "Saturday") {
        sortedData.splice(0, 0, "", "", "", "", "", "")
      }      
      setOurOwn(sortedData)
    })
  }, [monthNumber])


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
    }
  }

  function goToNextMonth() {
    if (monthNumber < 11) {
      setMonthNumber(monthNumber + 1)
    }
  }

  return (
    <div>
      <Header  monthName={months[monthNumber]}/>
      <Switch>
        <Route path="/events">
          <EventsList ourOwn={ourOwn}/>
        </Route>
        <Route path="/add-event">
          <AddEventForm ourOwn={ourOwn} handleNew={handleOurOwn} months={months}/>
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