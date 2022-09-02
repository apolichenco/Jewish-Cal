import React, {useState, useEffect} from 'react'

function AllTheData() {
    const [days, setDays] = useState([])
    const [hebdate, setheadebdate] = useState([])
    const [holiday, setheadoliday] = useState([])
    const [parashat, setParashat] = useState([])
    // const [roshchodesh, setRoshchodesh] = useState()
  
    useEffect (() => {
      fetch("https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=off&nx=on&start=2022-09-25&end=2022-10-25&month=x&ss=on&mf=on&c=off&geo=zip&zip=33065&m=0&s=on&leyning=off&d=on&o=on&i=off")
      .then((r) => r.json())
      .then((data) => setDays(data.items))
    }, [])
  
  
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
  
    useEffect (() => {
      hebdate.map((day) => {
        const dateString = day.date;
        const noSpace = dateString.replaceAll('-', '')
        const dayNumber = Number(noSpace);
        const dayData = {
          id: dayNumber,
          hebrewDate: day.hdate,
          dateInHebrew: day.hebrew,
        }
        fetch("http://localhost:3000/dates", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dayData)
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
      })
    }, [])
  
    useEffect (() => {
      holiday.map((yomTov) => {
        const dateString = yomTov.date;
        const noSpace = dateString.replaceAll('-', '')
        const dayNumber = Number(noSpace);
        fetch(`http://localhost:3000/dates/${dayNumber}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            holiday: yomTov.title
          })
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
      })
    }, [])
  
      useEffect (() => {
      parashat.map((parsha) => {
        const dateString = parsha.date;
        const noSpace = dateString.replaceAll('-', '')
        const dayNumber = Number(noSpace);
        fetch(`http://localhost:3000/dates/${dayNumber}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            parsha: parsha.title
          })
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
      })
    }, [])



  return (
    <div>AllTheData</div>
  )
}

export default AllTheData