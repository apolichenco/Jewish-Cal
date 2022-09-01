import React, { useState, useEffect } from "react";
import Table from "./Table"


function Calendar({daysData}) {
  const [hebdate, setHebdate] = useState([])
  const [holiday, setHoliday] = useState([])
  const [candles, setCandles] = useState([])
  const [zmanim, setZmanim] = useState([])
  const [parashat, setParashat] = useState([])
  const [roshchodesh, setRoshchodesh] = useState([])

  useEffect (() => {
    setHebdate(daysData.filter((day) => day.category === "hebdate"))
  }, [])
  useEffect (() => {
    setHoliday(daysData.filter((day) => day.category === "holiday"))
  }, [])
  useEffect (() => {
    setCandles(daysData.filter((day) => day.category === "candles"))
  }, [])
  useEffect (() => {
    setZmanim(daysData.filter((day) => day.category === "zmanim"))
  }, [])
  useEffect (() => {
    setParashat(daysData.filter((day) => day.category === "parashat"))
  }, [])
  useEffect (() => {
    setRoshchodesh(daysData.filter((day) => day.category === "roshchodesh"))
  }, [])

  console.log(hebdate)
  console.log(holiday)
  console.log(candles)
  console.log(zmanim)
  console.log(roshchodesh)
  console.log(parashat)


  return (
    <div>
      <Table />
    </div>
  );
}

export default Calendar;








//   function handleHebdate(day) {
//     setHebdate([...hebdate, day])
//   }

//   // console.log(daysData)

//   // useEffect (() =>  {
//     daysData.map((day) => {

//     // console.log(day)
//     // console.log(day.category)
//     const category = day.category
//     // console.log(category)
//     if (category === "hebdate") {
//       console.log(day)
//       return handleHebdate(day)
//     }
//   //   if (day.category === "holiday") {
//   //     setHoliday([...holiday, day])
//   //   }
//   //   if (day.category === "candles") {
//   //     setCandles([...candles, day])
//   //   }
//   //   if (day.category === "zmanim") {
//   //     return setZmanim([...zmanim, day])
//   //   }
//   //   if (day.category === "parashat") {
//   //     return setParashat([...parashat, day])
//   //   }
//   //   if (day.category === "roshchodesh") {
//   //     return setRoshchodesh([...roshchodesh, day])
//   //   }
//   //   else {
//   //     console.log("Nope")
//   //   }
//   })
// // }, [])

//   // setHebdate(theDay)
//   console.log(hebdate)