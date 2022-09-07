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


  useEffect (() => {fetchDays()}, [])

//   useEffect (() => {
//     console.log(ourOwn[0])
//     const fixedMonth = ourOwn
//     if (ourOwn[0].weekday !== "Sunday") {
//       const noSpace = ourOwn[0].id.toString()
//       const yearNum = noSpace.substring(0, 4)
//       const monthNum = noSpace.substring(4, 6)
//       const dayNum = noSpace.substring(6, 8)
//       const finalDate = new Date (`${yearNum}, ${monthNum}, ${dayNum}`) 
//       const minus = finalDate.getDay()
//       const emptyDays = 7 - minus
//       let i = 1
//       while (i < emptyDays) {
//         fixedMonth.splice(0, 0, "")
//         i = i + 1
//       }
//       setOurOwn(fixedMonth)
//     }
// }, [ourOwn])

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
          <Calendar ourOwn={ourOwn} goToPreviousMonth={goToPreviousMonth} goToNextMonth={goToNextMonth}/>
        </Route>
      </Switch>
      {/* <AllTheData /> */}
    </div>
  );
}

export default App;