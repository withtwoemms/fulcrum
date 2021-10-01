import React from "react";
import { Link } from 'react-router-dom';
import { linkStyle } from "../utils";

const Header = ({ menuItems, styles }) => {
  const [leftMenuItem, rightMenuItem] = menuItems;

  const headerStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.headerHeight,
    backgroundColor: "#fff",
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={headerStyle}>
      <Link to={leftMenuItem.href} style={linkStyle()}>
        <span>{leftMenuItem.icon}</span>
      </Link>
      <Link to='/' style={linkStyle("#000")}>
        <span>App</span>
      </Link>
      <Link to={rightMenuItem.href} style={linkStyle()}>
        <span>{rightMenuItem.icon}</span>
      </Link>
    </div>
  );
};

export default Header;

