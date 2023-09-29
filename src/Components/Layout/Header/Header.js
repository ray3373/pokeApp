import React from "react";
import "../../Home/style.css"


const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#CC0000", color: "#fff", padding: "10px 20px" }}>
    <div>
      <h1><a href="/" style={{ listStyleType: "none", textDecoration: "none",margin: 0, fontSize: "24px", color: "#fff" }}>POKEAPP</a></h1>
    </div>
    <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "20px" }}>
      <li><a href="/" style={{ textDecoration: "none", color: "#fff" }}>Home</a></li>
      <li><a href="/region" style={{ textDecoration: "none", color: "#fff" }}>Region</a></li>
      <li><a href="/type" style={{ textDecoration: "none", color: "#fff" }}>Types</a></li>
    </ul>
  </div>
  )
}

export default Header;