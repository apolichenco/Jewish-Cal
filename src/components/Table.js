import React, { useState, useEffect } from "react";
import Day from "./Day";
import Calendar from 'react-calendar';


function Table({daysData}) {
  const [hebdate, setHebdate] = useState([])
  const [holiday, setHoliday] = useState([])
  const [candles, setCandles] = useState([])
  const [zmanim, setZmanim] = useState([])
  const [parashat, setParashat] = useState([])
  const [roshchodesh, setRoshchodesh] = useState([])
  const [date, setDate] = useState(new Date());

  useEffect (() => {
    setHebdate(daysData.filter((day) => day.category === "hebdate"))
  }, [])
  useEffect (() => {
    setHoliday(daysData.filter((day) => day.category === "holiday"))
  }, [])
  // useEffect (() => {
  //   setCandles(daysData.filter((day) => day.category === "candles"))
  // }, [])
  // useEffect (() => {
  //   setZmanim(daysData.filter((day) => day.category === "zmanim"))
  // }, [])
  useEffect (() => {
    setParashat(daysData.filter((day) => day.category === "parashat"))
  }, [])
  useEffect (() => {
    setRoshchodesh(daysData.filter((day) => day.category === "roshchodesh"))
  }, [])


  return (
    <div className='app'>
          
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      {/* <table>
        <tr>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
        <tr>
          <Day />
        </tr>
        <tr>
          <Day />
        </tr>
        <tr>
          <Day />
        </tr>
        <tr>
          <Day />
        </tr>
        <tr>
          <Day />
        </tr>
      </table> */}
    </div>
  );
}

export default Table;