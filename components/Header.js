// components/Header.js

import React from "react";

const Header = ({ bigText, belowText }) => {
  return (
    <header style={{
    backgroundColor: 'rgba(255, 228, 166, 0.50)'}}>
    <div style={{marginLeft:'220px'}}>
      <span
        style={{
          color: "var(--primary-main, #B80818)",
          fontFamily: "Oregano",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
        className="big-text"
      >
        {bigText}
      </span>
      <div
        style={{
          color: "var(--text-light-primary, #212B36)",
          fontFamily: "Public Sans",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: 800,
          lineHeight: "64px",
        }}
        className="below-text"
      >
        {belowText}
      </div>
      </div>
    </header>
  );
};

export default Header;
