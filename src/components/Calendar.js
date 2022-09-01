import React, { useState, useEffect } from "react";
import Day from "./Day";


function Calendar({daysData}) {
  const [hebdate, setheadebdate] = useState([])
  const [holiday, setheadoliday] = useState([])
  const [parashat, setParashat] = useState([])
  // const [roshchodesh, setRoshchodesh] = useState()


  useEffect (() => {
    setheadebdate(daysData.filter((day) => day.category === "hebdate"))
  }, [daysData])
  useEffect (() => {
    setheadoliday(daysData.filter((day) => day.category === "holiday"))
  }, [daysData])
  useEffect (() => {
    setParashat(daysData.filter((day) => day.category === "parashat"))
  }, [daysData])
  // useEffect (() => {
  //   setRoshchodesh(daysData.filter((day) => day.category === "roshchodesh"))
  // }, [daysData])


  const firstWeek = hebdate.slice(0, 7);
  const secondWeek = hebdate.slice(7, 14);
  const thirdWeek = hebdate.slice(14, 21);
  const fourthWeek = hebdate.slice(21, 28);
  const lastWeek = hebdate.slice(28);

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
              return <Day key={index} day={day} holiday={holiday} parsha={parashat}/>
            })}
          </tr>
          <tr>
            {secondWeek.map((day, index) => {
              return <Day key={index} day={day} holiday={holiday} parsha={parashat}/>
            })}
          </tr>
          <tr>
            {thirdWeek.map((day, index) => {
              return <Day key={index} day={day} holiday={holiday} parsha={parashat}/>
            })}
          </tr>
          <tr>
            {fourthWeek.map((day, index) => {
              return <Day key={index} day={day} holiday={holiday} parsha={parashat}/>
            })}
          </tr>
          <tr>
            {lastWeek.map((day, index) => {
              return <Day key={index} day={day} holiday={holiday} parsha={parashat}/>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;