import React, { useEffect, useState } from "react";


function AddEventForm({handleNew, months}) {
  const [eventName, setEventName] = useState()
  const [newEventDate, setNewEventDate] = useState()
  const [eventMonth, setEventMonth] = useState("Tishrei")
  const [eventYear, setEventYear] = useState(5783)
  
  let k = [""]
  let i = 1
  while (i < 31) {
    k[i]= i;
    i = i + 1;
  }

  function handleEventName(e) {
    setEventName(e.target.value)
  }
   
  function handleDayChange(e) {
    setNewEventDate(e.target.value)
  }

  function handleMonthChange(e) {
    setEventMonth(e.target.value)
  }

  function handleYearChange(e) {
    setEventYear(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/${eventMonth}`)
    .then((r) => r.json())
    .then((data) => {
    const theDay = data.find((day) => day.hebrewDate === `${newEventDate} ${eventMonth} ${eventYear}`)
    fetch(`http://localhost:3000/${eventMonth}/${theDay.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        privateEvent: eventName
      })
    })
    .then((r) => r.json())
    .then((data) => handleNew(data))
   })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-form">
        <label >Event Name</label><br></br>
        <input type="text" id="event-name" name="event-name" onChange={handleEventName} className="new-input"></input>
      </div>
      <div className="new-form">
        <label>Day:</label><br></br>
        <select onChange={handleDayChange} className="new-input">
          {k.map((number) => <option key={number} value={number}>{number}</option>)}
        </select><br></br>
      </div>
      <div className="new-form">
        <label>Choose Month:</label><br></br>
        <select onChange={handleMonthChange} className="new-input">
          {months.map((month, index) => <option key={index} value={month}>{month}</option>)}
        </select><br></br>
      </div>
      <div className="new-form">
        <label>Year</label><br></br>
        <input type="text" value={eventYear} onChange={handleYearChange} className="new-input"></input><br></br>
      </div>
      <input type="submit" className="new-input"></input>
    </form>
  );
}

export default AddEventForm;