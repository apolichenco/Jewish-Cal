import React, { useState, useEffect } from "react";


function EventList({daysData}) {
  const [bigDays, setBigDays] = useState([])
  // const [parashat, setParashat] = useState([])

  useEffect (() => {
    setBigDays(daysData.filter((day) => day.category === "holiday", "parashat"))
  }, [daysData])
  // useEffect (() => {
  //   setParashat(daysData.filter((day) => day.category === "parashat"))
  // }, [daysData])
  
  return (
    <div>
      
    </div>
  );
}

export default EventList;