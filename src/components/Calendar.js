import React, { useState, useEffect } from "react";
import Day from "./Day";


function Calendar({ourOwn}) {
  const [inOrder, setInOrder] = useState([])
  
    useEffect (() => {
      const sortedOurOwn = ourOwn.sort((a, b) => a.id - b.id);
      setInOrder(sortedOurOwn)
  }, [ourOwn])

  const firstWeek = inOrder.slice(0, 7);
  const secondWeek = inOrder.slice(7, 14);
  const thirdWeek = inOrder.slice(14, 21);
  const fourthWeek = inOrder.slice(21, 28);
  const lastWeek = inOrder.slice(28);

  console.log(inOrder)

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
          <tr>
            {firstWeek.map((day, index) => {
              return <Day key={index} day={day}/>
            })}
          </tr>
          <tr>
            {secondWeek.map((day, index) => {
              return <Day key={index} day={day}/>
            })}
          </tr>
          <tr>
            {thirdWeek.map((day, index) => {
              return <Day key={index} day={day}/>
            })}
          </tr>
          <tr>
            {fourthWeek.map((day, index) => {
              return <Day key={index} day={day}/>
            })}
          </tr>
          <tr>
            {lastWeek.map((day, index) => {
              return <Day key={index} day={day}/>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;