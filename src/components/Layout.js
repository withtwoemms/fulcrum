import React from "react";
import Content from "./Content";
import FooterMenu from "./FooterMenu";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function Layout({ styling, menuItems, otherStyles }) {

    return (
      <div style={styling}>
        {
          otherStyles.showSidebar ? (<Sidebar menuItems={menuItems} styles={otherStyles} />) : 
                               (<TopBar styles={otherStyles} />)
        }

        <Content styles={otherStyles} />

        {!otherStyles.showSidebar && (<FooterMenu menuItems={menuItems} styles={otherStyles} />)}
      </div>
    );
}

export default Layout;

