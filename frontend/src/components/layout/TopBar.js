import React from "react";
import { goTo } from "../utils";

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
      <span onClick={leftMenuItem.href? () => goTo(leftMenuItem.href) : undefined}>{leftMenuItem.icon}</span>
      <span onClick={() => goTo('/')}>App</span>
      <span onClick={rightMenuItem.href? () => goTo(rightMenuItem.href) : undefined}>{rightMenuItem.icon}</span>
    </div>
  );
};

export default TopBar;

