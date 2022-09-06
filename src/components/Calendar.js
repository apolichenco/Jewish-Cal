import React from "react";
import Day from "./Day";


function Calendar({ourOwn}) {

  const month = []
  ourOwn.forEach((day) => {
    if (day.weekday === "Sunday") {
      const week = []
      month.push(week)
    }
    month[month.length - 1].push(day)
  })

  return (
    <div className='app'>
      <table>
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {month.map((week, index) => {
            return <tr key={index}>
              {week.map((day, index) => {
              return <Day key={index} day={day}/>
            })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;