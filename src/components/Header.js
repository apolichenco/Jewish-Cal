import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"

function Header() {

  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <NavLink 
      to="./"
      exact
      style={linkStyles}
      activeStyle={{
        background: "darkblue"
      }}
      >
        Calendar
      </NavLink>
      <NavLink 
      to="./events"
      exact
      style={linkStyles}
      activeStyle={{
        background: "darkblue"
      }}
      >
        Events List
      </NavLink>
      <NavLink 
      to="./add-event"
      exact
      style={linkStyles}
      activeStyle={{
        background: "darkblue"
      }}
      >
        Add Event
      </NavLink>
    </div>
  );
}

export default Header;