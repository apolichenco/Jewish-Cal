import React, {useState, useEffect} from 'react'

function AllTheData() {
    // const [days, setDays] = useState([])
    // const [hebdate, setHebdate] = useState([])
    // const [holiday, setHoliday] = useState([])
    // const [parashat, setParashat] = useState([])
    // const [roshchodesh, setRoshchodesh] = useState([])
  
    // useEffect (() => {
    //   fetch("https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=off&nx=on&year=5783&yt=H&month=x&ss=on&mf=on&c=off&geo=zip&zip=33065&m=0&s=on&leyning=off&d=on&o=on&i=off")
    //   .then((r) => r.json())
    //   .then((data) => {
    //     console.log(data)
    //     setDays(data.items)})
    // }, [])
  
  
    // useEffect (() => {
    //   setHebdate(days.filter((day) => day.category === "hebdate"))
    // }, [days])
    // useEffect (() => {
    //   setHoliday(days.filter((day) => day.category === "holiday"))
    // }, [days])
    // useEffect (() => {
    //   setParashat(days.filter((day) => day.category === "parashat"))
    // }, [days])
    // useEffect (() => {
    //   setRoshchodesh(days.filter((day) => day.category === "roshchodesh"))
    // }, [days])
    
  
    // useEffect (() => {
    //   hebdate.map((day) => {
    //     const dateString = day.date;
    //     const noSpace = dateString.replaceAll('-', '')
    //     const dayNumber = Number(noSpace);
    //      const thisMonth = day.hdate.slice(2, -4)
    //     const dayData = {
    //       id: dayNumber,
    //       hebrewDate: day.hdate,
    //       dateInHebrew: day.hebrew,
    //       month: thisMonth
    //     }
    //     fetch("http://localhost:3000/dates/", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(dayData)
    //     })
    //     .then((r) => r.json())
    //     .then((data) => console.log("data"))
    //   })
    // }, [days])
  
    // useEffect (() => {
    //   holiday.map((yomTov) => {
    //     const dateString = yomTov.date;
    //     const noSpaces = dateString.replaceAll('-', '')
    //     const noSpace = noSpaces.slice(0, 8)
    //     const yomTovNumber = Number(noSpace);
    //     fetch(`http://localhost:3000/dates/${yomTovNumber}/`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         holiday: yomTov.title
    //       })
    //     })
    //     .then((r) => r.json())
    //     .then((data) => console.log("data"))
    //   })
    // }, [days])
  
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
    //     .then((data) => console.log("data"))
    //   })
    // }, [days])

    // useEffect (() => {
    //     roshchodesh.map((oneMonth) => {
    //       const dateString = oneMonth.date;
    //       const noSpace = dateString.replaceAll('-', '')
    //       const dayNumber = Number(noSpace);
    //       fetch(`http://localhost:3000/dates/${dayNumber}`, {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           roshChodesh: oneMonth.title
    //         })
    //       })
    //       .then((r) => r.json())
    //       .then((data) => console.log("data"))
    //     })
    //   }, [days])

    // useEffect (() => {
    //   days.map((day) => {
    //         const dateString = day.date.slice(0, 8);
    //         const noSpace = dateString.replaceAll('-', '')
    //         const finalDate = new Date (dateString.replaceAll('-', ', '))
    //         const options = { weekday: 'long'};
    //         const weekDay = new Intl.DateTimeFormat('en-US', options).format(finalDate);
    //     fetch(`http://localhost:3000/dates/${noSpace}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         weekday: weekDay
    //       })
    //     })
    //     .then((r) => r.json())
    //     .then((data) => console.log("data"))
    //   })}, [days])


  return (
    <div></div>
  )
}

export default AllTheData
            // const yearNum = noSpace.substring(0, 4)
            // const monthNum = noSpace.substring(4, 6)
            // const dayNum = noSpace.substring(6, 8)
            // const finalDate = new Date (`${yearNum}, ${monthNum}, ${dayNum}`) 
