import React, { useState, useEffect } from "react";
import Day from "./Day";
import Calendar from 'react-calendar';


function Table({daysData}) {
  const [hebdate, setheadebdate] = useState([])
  const [holiday, setheadoliday] = useState([])
  const [parashat, setParashat] = useState([])
  const [roshchodesh, setRoshchodesh] = useState([])

  useEffect (() => {
    setheadebdate(daysData.filter((day) => day.category === "hebdate"))
  }, [daysData])
  useEffect (() => {
    setheadoliday(daysData.filter((day) => day.category === "holiday"))
  }, [daysData])
  useEffect (() => {
    setParashat(daysData.filter((day) => day.category === "parashat"))
  }, [daysData])
  useEffect (() => {
    setRoshchodesh(daysData.filter((day) => day.category === "roshchodesh"))
  }, [daysData])

  const slicedArray = hebdate.slice(0, 7);

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
            {slicedArray.map((day, index) => {
              return <Day key={index} day={day} holiday={holiday} parsha={parashat}/>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;