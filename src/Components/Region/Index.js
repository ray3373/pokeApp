import React from "react";
import KantoPokemon from "./KantoRegion/Kanto";


const Region = () => {
return (
	<div>
	<h1>Regions Page</h1>
  
	<div style={{justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
    <div>
    </div>
    <ul style={{ listStyleType: "none", padding: 0,  gap: "20px" }}>
      <li><a href="/kantoregion" style={{ textDecoration: "none", color: "#000" }}>Kanto</a></li>
      <li><a href="/johtoregion" style={{ textDecoration: "none", color: "#000" }}>Johto</a></li>
    </ul>
    
	{/* <KantoPokemon /> */}
  </div>
	</div>
);
};

export default Region;
