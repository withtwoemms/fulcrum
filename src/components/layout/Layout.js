import React, { useEffect } from "react";
import FooterMenu from "./FooterMenu";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const allMenuItems = [
  { icon: `🔒`, text: "Item 1" },
  { icon: `🔓`, text: "Item 2" },
  { icon: `🛡️`, text: "Item 3" },
  { icon: `🔏`, text: "Item 4" },
  { icon: `🔐`, text: "Item 5" },
  { icon: `👾`, text: "Profile", 'transient': true },
  { icon: `⚙`, text: "Settings", 'transient': true }
];
const nonTransientMenuItems = allMenuItems.filter(item => !item.transient)

var menuItems = nonTransientMenuItems

function Layout({ contentProviders, windowState }) {
    const sidebarCollapsed = windowState.width < 1100;
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowState.width > 500,
      showSidebar: windowState.width > 768,
      sidebarCollapsed,
      sidebarWidth: sidebarCollapsed ? 50 : 150
    };
    const layoutStyling = {
      backgroundColor: styles.black(0.05),
      minHeight: "100vh",
      position: "relative"
    }

    if (styles.showSidebar) {
      menuItems = allMenuItems
    } else {
      menuItems = nonTransientMenuItems
    }

    return (
      <div style={layoutStyling}>
        {
          styles.showSidebar ? (<SideBar menuItems={menuItems} styles={styles} />) : 
                               (<TopBar styles={styles} />)
        }

        {contentProviders.map(provider => provider(styles))}

        {!styles.showSidebar && (<FooterMenu menuItems={nonTransientMenuItems} styles={styles} />)}
      </div>
    );
}

export default Layout;
