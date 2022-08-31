import React, { useState, useEffect } from "react";


function App() {
  useEffect (() => {
    fetch("https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=off&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=zip&zip=33065&M=on&s=on&leyning=off&d=on&o=on&i=off")
    .then((r) => r.json())
    .then((data) => console.log(data))
  }, [])


  return (
    <div className="App">
      <h1>Hello Mottcdcdwcwdo</h1>
    </div>
  );
}

export default App;
