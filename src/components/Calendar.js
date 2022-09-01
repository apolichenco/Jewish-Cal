import React, { useState, useEffect } from "react";
import Table from "./Table"


function Calendar({daysData}) {

  return (
    <div>
      <Table daysData={daysData}/>
    </div>
  );
}

export default Calendar;