import React from "react";
import { Link } from 'react-router-dom';

const TopBar = ({ menuItems, styles }) => {
  const [leftMenuItem, rightMenuItem] = menuItems;

  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "#fff",
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>
      <Link to={leftMenuItem.href} style={{ textDecoration: 'none' }}>
        <span>{leftMenuItem.icon}</span>
      </Link>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <span>App</span>
      </Link>
      <Link to={rightMenuItem.href} style={{ textDecoration: 'none' }}>
        <span>{rightMenuItem.icon}</span>
      </Link>
    </div>
  );
};

export default TopBar;

