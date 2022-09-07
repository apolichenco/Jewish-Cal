import React, { useEffect, useState } from "react";


function AddEventForm({ourOwn, handleNew}) {
  const [eventName, setEventName] = useState()
  const [newEventDate, setNewEventDate] = useState()
  const [eventMonth, setEventMonth] = useState("Tishrei")
  const [eventYear, setEventYear] = useState(5783)
  // const [anotherMonth, setAnotherMonth] = useState([])
  
  let k = [""]
  let i = 1
  while (i < 31) {
    k[i]= i;
    i = i + 1;
  }

  // useEffect(() => {
  // fetch(`http://localhost:3000/${months[monthNumber]}`)
  // .then((r) => r.json())
  // .then((data) => {setAnotherMonth(data)})}, [handleSubmit])

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Event Name</label><br></br>
        <input type="text" id="event-name" name="event-name" onChange={handleEventName}></input><br></br>
        <label>Day:</label><br></br>
        <select onChange={handleDayChange}>
          {k.map((number) => <option key={number} value={number}>{number}</option>)}
        </select><br></br>
        <label>Choose Month:</label><br></br>
        <select onChange={handleMonthChange}>
          <option value={"Tishrei"}>Tishrei</option>
          <option value={'Cheshvan'}>Cheshvan</option>
          <option value={'Kislev'}>Kislev</option>
          <option value={'Tevet'}>Tevet</option>
          <option value={`Sh'vat`}>Sh'vat</option>
          <option value={'Adar'}>Adar</option>
          <option value={'Nisan'}>Nisan</option>
          <option value={'Iyyar'}>Iyyar</option>
          <option value={'Sivan'}>Sivan</option>         
          <option value={'Tamuz'}>Tamuz</option>
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