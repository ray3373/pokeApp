import React from "react";

const Footer = () => {
  return (
    <div style={{
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80px", // Adjust the height as needed
      backgroundColor: "#FFDE00", // Pokémon yellow color
      borderTop: "2px solid #FFCB05", // Slightly darker yellow border
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333", // Dark text color
    }}>
      &copy; 2023 Your Website Name | Pokémon Company
    </div>
  )
}

export default Footer;