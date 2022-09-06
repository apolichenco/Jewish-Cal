import React, { useState } from "react";


function AddEventForm() {
  const [eventName, setEventName] = useState()
  const [newEventDate, setNewEventDate] = useState(1)
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])


  function handleEventName(e) {
    setEventName(e.target.value)
  }
   
  function handleDayChange(e) {
    setNewEventDate(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    console.log(`name:${eventName}, day:${newEventDate}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="event-name">Event Name</label><br></br>
        <input type="text" id="event-name" name="event-name" onChange={handleEventName}></input><br></br>
        <label>Day:</label><br></br>
        <select onChange={handleDayChange}>
          {numbers.map((number) => <option key={number} value={number}>{number}</option>)}
        </select><br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default AddEventForm;