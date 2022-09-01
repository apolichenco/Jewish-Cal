import React, { useState, useEffect } from "react";
import Day from "./Day";


function Table() {
  return (
    <div>
      <table>
        <tr>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
        <tr>
          <Day />
        </tr>
        <tr>
          <Day />
        </tr>
        <tr>
          <Day />
        </tr>
        <tr>
          <Day />
        </tr>
        <tr>
          <Day />
        </tr>
      </table>
    </div>
  );
}

export default Table;