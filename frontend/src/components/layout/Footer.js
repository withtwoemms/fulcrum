import React from "react";
import { Link } from 'react-router-dom';
import { linkStyle } from "../utils";

const Footer = ({ menuItems, styles }) => {
  const footerMenuStyle = {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    height: styles.footerMenuHeight,
    backgroundColor: "#333",
    color: "#fff",
    position: "fixed",
    bottom: 0
  }
  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
  const iconStyle = { marginRight: 5, fontSize: 20 }

  return (
    <div style={footerMenuStyle}>
      {
        menuItems.map((item, i) => {
          return (
            <Link to={item.href} style={{...linkStyle(), ...menuItemStyle}}>
              <div key={i}>
                <span style={iconStyle}>{item.icon}</span>
                {styles.showFooterText && item.text}
              </div>
            </Link>
          );
        })
      }
    </div>
  );
};

export default Footer;

