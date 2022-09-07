import React, { useState, useEffect } from "react";


function EventList({ourOwn}) {
  const [bigDays, setBigDays] = useState([])

  useEffect (() => {
    setBigDays(ourOwn.filter((day) => day.holiday || day.parasha || day.roshChodesh || day.privateEvent))
  }, [ourOwn])

  return (
    <div>
      {bigDays.map((day, index) => {
         const noYear = day.hebrewDate.slice(0, day.hebrewDate.length - 4);
        return (
          <div key={index} >
            <h2>{day.holiday ? day.holiday : null}</h2>
            <h2>{day.parsha ? day.parsha : null}</h2>
            <h2>{day.roshChodesh ? day.roshChodesh : null}</h2>
            <h2>{day.privateEvent ? day.privateEvent : null}</h2>
            <h4>{noYear}</h4>
          </div>)
      })}
    </div>
  );
}

export default EventList;