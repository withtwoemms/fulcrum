import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
    const title = 'fulcrum.academy';
    const [windowState, setWindowState] = useState(
      {
        height: window.innerHeight,
        width: window.innerWidth
      }
    );
    const menuItems = [
      { icon: `🔒`, text: "Item 1" },
      { icon: `🔓`, text: "Item 2" },
      { icon: `🛡️`, text: "Item 3" },
      { icon: `🔏`, text: "Item 4" },
      { icon: `🔐`, text: "Item 5" }
    ];
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

    useEffect(() => {
      function handleResize() {
        setWindowState(
          {
            height: window.innerHeight,
            width: window.innerWidth
          }
        )
      }
      document.title = title
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })

    if (styles.showSidebar) {
      menuItems.push({ icon: `👾`, text: "Profile" });
      menuItems.push({ icon: `⚙`, text: "Settings" });
    }

    let styling = {
      backgroundColor: styles.black(0.05),
      minHeight: "100vh",
      position: "relative"
    }
    return (
      <Switch>
        <Route exact path="/">
            <Layout styling={styling} menuItems={menuItems} otherStyles={styles} />
        </Route>
      </Switch>
    );
}

export default App;
