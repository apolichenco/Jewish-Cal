import React, { useState, useEffect } from "react";


function EventList({daysData}) {
  const [bigDays, setBigDays] = useState([])

  useEffect (() => {
    setBigDays(daysData.filter((day) => day.category === "holiday" || day.category === "parashat"))
  }, [daysData])

  return (
    <div>
      {bigDays.map((day, index) => {
         const noYear = day.hdate.slice(0, day.hdate.length - 4);
        return (
          <div key={index}>
            <h2>{day.title}</h2> 
            <h4>{noYear}</h4>
          </div>)
      })}
    </div>
  );
}

export default EventList;