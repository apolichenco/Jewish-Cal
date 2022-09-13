import React from "react";
import Day from "./Day";


function Calendar({ourOwn, goToPreviousMonth, goToNextMonth}) {

  const month = []

  ourOwn.forEach((day, index) => {
    if (index === 0) {
      const week = []
      month.push(week)
    }
    if (day.weekday === "Sunday") {
      const week = []
      month.push(week)
    }
    month[month.length - 1].push(day)   
  })



  return (
    <div className='app'>
      <button onClick={goToPreviousMonth} id="previous">Previous Month</button>
      <button onClick={goToNextMonth} id="next">Next Month</button>
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