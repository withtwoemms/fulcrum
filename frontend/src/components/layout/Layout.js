import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Header from "./Header";

const transientMenuItems = [
  { icon: `👾`, text: "Profile", 'transient': true, href: 'coming-soon' },
  { icon: `⚙`, text: "Settings", 'transient': true, href: 'status' }
];
const nonTransientMenuItems = [
  { icon: `🔒`, text: "Item 1" },
  { icon: `🔓`, text: "Item 2" },
  { icon: `🛡️`, text: "Item 3", href: "admin" },
  { icon: `🔏`, text: "Item 4", href: "contact" },
  { icon: `🔐`, text: "Item 5" },
];

const allMenuItems = nonTransientMenuItems.concat(transientMenuItems);

function Layout({ contentProviders, windowState }) {
    const sidebarCollapsed = windowState.width < 1100;
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterText: windowState.width > 500,
      showSidebar: windowState.width > 768,
      sidebarCollapsed,
      sidebarWidth: sidebarCollapsed ? 50 : 150
    };
    const layoutStyling = {
      backgroundColor: styles.black(0.05),
      minHeight: "100vh",
      position: "relative"
    }
    const contentStyling = {
      paddingTop: styles.showSidebar ? 20 : styles.topBarHeight + 20,
      paddingRight: 20,
      paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
      paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20
    };

    return (
      <div style={layoutStyling}>
        {
          styles.showSidebar ? (<SideBar menuItems={allMenuItems} styles={styles} />)
                             : (<Header menuItems={transientMenuItems} styles={styles} />)
        }

        <div style={contentStyling}>
          {contentProviders.map(provider => provider(styles))}
        </div>

        {!styles.showSidebar && (<Footer menuItems={nonTransientMenuItems} styles={styles} />)}
      </div>
    );
}

export default Layout;
