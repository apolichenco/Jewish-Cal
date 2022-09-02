import React, { useState, useEffect } from "react";
import Day from "./Day";


function Calendar({daysData, ourOwn}) {
  // const [hebdate, setheadebdate] = useState([])
  // const [holiday, setheadoliday] = useState([])
  // const [parashat, setParashat] = useState([])
  // // const [roshchodesh, setRoshchodesh] = useState()




  // useEffect (() => {
  //   setheadebdate(daysData.filter((day) => day.category === "hebdate"))
  // }, [daysData])
  // useEffect (() => {
  //   setheadoliday(daysData.filter((day) => day.category === "holiday"))
  // }, [daysData])
  // useEffect (() => {
  //   setParashat(daysData.filter((day) => day.category === "parashat"))
  // }, [daysData])
  // // useEffect (() => {
  // //   setRoshchodesh(daysData.filter((day) => day.category === "roshchodesh"))
  // // }, [daysData])

  // useEffect (() => {
  //   hebdate.map((day) => {
  //     const dateString = day.date;
  //     const noSpace = dateString.replaceAll('-', '')
  //     const dayNumber = Number(noSpace);
  //     const dayData = {
  //       id: dayNumber,
  //       hebrewDate: day.hdate,
  //       dateInHebrew: day.hebrew,
  //     }
  //     fetch("http://localhost:3000/dates", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(dayData)
  //     })
  //     .then((r) => r.json())
  //     .then((data) => console.log(data))
  //   })
  // }, [])

  // useEffect (() => {
  //   holiday.map((yomTov) => {
  //     const dateString = yomTov.date;
  //     const noSpace = dateString.replaceAll('-', '')
  //     const dayNumber = Number(noSpace);
  //     fetch(`http://localhost:3000/dates/${dayNumber}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         holiday: yomTov.title
  //       })
  //     })
  //     .then((r) => r.json())
  //     .then((data) => console.log(data))
  //   })
  // }, [])

  //   useEffect (() => {
  //   parashat.map((parsha) => {
  //     const dateString = parsha.date;
  //     const noSpace = dateString.replaceAll('-', '')
  //     const dayNumber = Number(noSpace);
  //     fetch(`http://localhost:3000/dates/${dayNumber}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         parsha: parsha.title
  //       })
  //     })
  //     .then((r) => r.json())
  //     .then((data) => console.log(data))
  //   })
  // }, [])

  const sortedOurOwn = ourOwn.sort((a, b) => {
    return a.id - b.id
  });



  console.log(sortedOurOwn)

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