import React from "react";


function Day({day}) {

  let noYear = ""
  if (day !== "") {
   noYear = day.hebrewDate.slice(0, day.hebrewDate.length - 4);
}
  const blue = {color: "blue"}
  const green = {color: "green"}
  const brown = {color: "brown"}
  const purple = {color: "purple"}


  return (
      <td>
        <h4 style={brown}>{noYear ? noYear : null}</h4>
        <h5 style={green}>{day.holiday ? day.holiday : null}</h5>
        <h5 style={purple}>{day.parsha ? day.parsha : null}</h5>
        <h5 style={green}>{day.roshChodesh ? day.roshChodesh : null}</h5>
        <h5 style={blue}>{day.privateEvent ? day.privateEvent : null}</h5>
      </td>
  );
}

export default Day;

