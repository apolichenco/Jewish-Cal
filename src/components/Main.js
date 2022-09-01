import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import EventsList from "./EventsList"
import AddEventForm from "./AddEventForm"


function Main() {
  const [days, setDays] = useState([])
  
  useEffect (() => {
    fetch("https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=off&nx=on&start=2022-09-25&end=2022-10-25&month=x&ss=on&mf=on&c=off&geo=zip&zip=33065&m=0&s=on&leyning=off&d=on&o=on&i=off")
    .then((r) => r.json())
    .then((data) => setDays(data.items))
  }, [])


  return (
    <div>
      <Calendar daysData={days}/>
      <EventsList />
      <AddEventForm />
    </div>
  );
}

export default Main;