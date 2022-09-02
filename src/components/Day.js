import React from "react";


function Day({day}) {

  const noYear = day.hebrewDate.slice(0, day.hebrewDate.length - 4);

  return (
      <td>
        <h4>{noYear}</h4>
        <h5>{day.holiday ? day.holiday : null}</h5>
        <h5>{day.parsha ? day.parsha : null}</h5>
        <h5>{day.roshChodesh ? day.roshChodesh : null}</h5>
      </td>
  );
}

export default Day;

