import React from "react";

const Content = ({ title, text, styles }) => {
  const { showSidebar } = styles;

  const post = {title: title, summary: text};

  const contentStyle = {
    paddingTop: showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
        <p>{post.summary}</p>
      </div>
    </div>
  );
};

export default Content;
