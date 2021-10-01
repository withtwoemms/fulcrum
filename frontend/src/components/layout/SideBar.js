import React from "react";
import { Link } from 'react-router-dom';
import { linkStyle } from "../utils";

const SideBar = ({ menuItems, styles }) => {
  const sidebarStyle = {
    height: "100vh",
    width: styles.sidebarWidth,
    position: "fixed",
    backgroundColor: styles.black(0.8),
    paddingTop: 40
  };
  const menuItemStyle = {
    display: "flex",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
    color: styles.white(0.9)
  };
  const iconStyle = {
    fontSize: 26,
    marginRight: styles.sidebarCollapsed ? 0 : 10
  };
  const logoStyle = {
    textAlign: "center",
    color: styles.white(),
    fontSize: 34,
    marginBottom: 60,
    fontWeight: "bold"
  };

  return (
    <div style={sidebarStyle}>
      <Link to='/' style={linkStyle()}>
        <div style={logoStyle}>{styles.sidebarCollapsed ? "A" : "App"}</div>
      </Link>
        {
          menuItems.map((item, i) => (
            <Link key={i} to={item.href || 'no-route-found'} style={linkStyle()}>
              <div style={menuItemStyle}>
                <span style={iconStyle}>{item.icon}</span>
                {!styles.sidebarCollapsed && item.text}
              </div>
            </Link>
          ))
        }
    </div>
  );
};

export default SideBar;

