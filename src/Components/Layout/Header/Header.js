import React from "react";

const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      PokeApp
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/region">Region</a></li>
        <li><a href="/type">Types</a></li>
      </ul>
        
    </div>
  )
}

export default Header;