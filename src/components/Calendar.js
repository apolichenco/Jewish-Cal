import React, { useState, useEffect } from "react";
import Day from "./Day";


function Calendar({ourOwn}) {
  // const [inOrder, setInOrder] = useState([])
  
  //   useEffect (() => {
  //     const sortedOurOwn = ourOwn.sort((a, b) => a.id - b.id);
  //     setInOrder(sortedOurOwn)
  // }, [ourOwn])

  const firstWeek = ourOwn.slice(0, 7);
  const secondWeek = ourOwn.slice(7, 14);
  const thirdWeek = ourOwn.slice(14, 21);
  const fourthWeek = ourOwn.slice(21, 28);
  const lastWeek = ourOwn.slice(28);

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