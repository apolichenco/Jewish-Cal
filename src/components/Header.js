import React from "react";
import {NavLink} from "react-router-dom"

function Header({monthName}) {

  return (
    <div>
      <NavLink 
      to="./"
      exact
      className="link-styles"
      activeStyle={{        
        background: "pink",
        color: "black",
        border: "3px solid rgb(162, 0, 255)",
      }}
      >
      {monthName}
      </NavLink>
      <NavLink 
      to="./events"
      exact
      className="link-styles"
      activeStyle={{
        background: "pink",
        color: "black",
        border: "3px solid rgb(162, 0, 255)",
      }}
      >
        Events List
      </NavLink>
      <NavLink 
      to="./add-event"
      exact
      className="link-styles"
      activeStyle={{        
        background: "pink",
        color: "black",
        border: "3px solid rgb(162, 0, 255)",
      }}
      >
        Add Event
      </NavLink>
    </div>
  );
}

export default Header;