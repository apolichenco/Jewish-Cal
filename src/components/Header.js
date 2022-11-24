import React from "react";
import {NavLink} from "react-router-dom"

function Header({}) {

  return (
      <div>

      <NavLink 
      to="./link"
      exact
      className="link-styles"
      activeStyle={{
        background: "pink",
        color: "black",
        border: "3px solid rgb(162, 0, 255)",
      }}
      >
        List
      </NavLink>
      <NavLink 
      to="./form"
      exact
      className="link-styles"
      activeStyle={{        
        background: "pink",
        color: "black",
        border: "3px solid rgb(162, 0, 255)",
      }}
      >
        Form
      </NavLink>
      </div>
  );
}

export default Header;
