import React, { useState, useEffect } from "react";


function Day({day, holiday, parsha}) {

  const noYear = day.hdate.slice(0, day.hdate.length - 4);
  const yesHoliday = holiday.filter((holidays) => holidays.hdate === day.hdate)
  let theHoliday;
  if (yesHoliday.length > 0) {
    theHoliday = yesHoliday[0].title
    }

    const yesParsha = parsha.filter((parshas) => parshas.hdate === day.hdate)
    let theParsha;
    if (yesParsha.length > 0) {
      theParsha = yesParsha[0].title
      }

  return (
      <td>
        <h4>{noYear}</h4>
        <h5>{theHoliday ? theHoliday : null}</h5>
        <h5>{theParsha ? theParsha : null}</h5>
      </td>
  );
}

export default Day;

