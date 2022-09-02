import React, {useState, useEffect} from 'react'

function AllTheData() {
    // const [days, setDays] = useState([])
    // const [hebdate, setheadebdate] = useState([])
    // const [holiday, setheadoliday] = useState([])
    // const [parashat, setParashat] = useState([])
    // const [roshchodesh, setRoshchodesh] = useState()
  
    // useEffect (() => {
    //   fetch("https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=off&nx=on&start=2022-09-25&end=2022-10-25&month=x&ss=on&mf=on&c=off&geo=zip&zip=33065&m=0&s=on&leyning=off&d=on&o=on&i=off")
    //   .then((r) => r.json())
    //   .then((data) => setDays(data.items))
    // }, [])
  
  
    // useEffect (() => {
    //   setheadebdate(days.filter((day) => day.category === "hebdate"))
    // }, [days])
    // useEffect (() => {
    //   setheadoliday(days.filter((day) => day.category === "holiday"))
    // }, [days])
    // useEffect (() => {
    //   setParashat(days.filter((day) => day.category === "parashat"))
    // }, [days])
    // useEffect (() => {
    //   setRoshchodesh(days.filter((day) => day.category === "roshchodesh"))
    // }, [days])
    

    // console.log(roshchodesh)
  
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
    //     fetch("http://localhost:3000/dates/", {
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

    // useEffect (() => {
    //     roshchodesh.map((oneMonth) => {
    //       const dateString = roshchodesh.date;
    //       console.log(roshchodesh)
    //       const noSpace = dateString.replaceAll('-', '')
    //       const dayNumber = Number(noSpace);
    //       fetch(`http://localhost:3000/dates/${dayNumber}`, {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           roshChodesh: roshchodesh.title
    //         })
    //       })
    //       .then((r) => r.json())
    //       .then((data) => console.log(data))
    //     })
    //   }, [])



  return (
    <div></div>
  )
}

export default AllTheData