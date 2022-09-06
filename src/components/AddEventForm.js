import React, { useState } from "react";


function AddEventForm({ourOwn, handleNew}) {
  const [eventName, setEventName] = useState()
  const [newEventDate, setNewEventDate] = useState("")
  const [eventMonth, setEventMonth] = useState()
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
    const theDay = ourOwn.find((day) => day.hebrewDate === `${newEventDate} ${eventMonth} ${eventYear}`)
    fetch(`http://localhost:3000/dates/${theDay.id}`, {
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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Event Name</label><br></br>
        <input type="text" id="event-name" name="event-name" onChange={handleEventName}></input><br></br>
        <label>Day:</label><br></br>
        <select onChange={handleDayChange}>
          {k.map((number) => <option key={number} value={number}>{number}</option>)}
        </select><br></br>
        <label>Month:</label><br></br>
        <select onChange={handleMonthChange}>
          <option value={"Tishrei"}>Tishrei</option>
          <option value={'Cheshvan'}>Cheshvan</option>
          <option value={'Kislev'}>Kislev</option>
          <option value={'Tevet'}>Tevet</option>
          <option value={'Shevat'}>Shevat</option>
          <option value={'Adar I'}>Adar I</option>
          <option value={'Adar II'}>Adar II</option>
          <option value={'Nissan'}>Nissan</option>
          <option value={'Iyar'}>Iyar</option>
          <option value={'Sivan'}>Sivan</option>         
          <option value={'Tammuz'}>Tammuz</option>
          <option value={'Av'}>Av</option>
          <option value={'Elul'}>Elul</option>
        </select><br></br>
        <label >Year</label><br></br>
        <input type="text" value={eventYear} onChange={handleYearChange}></input><br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default AddEventForm;