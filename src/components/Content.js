import React from "react";

const Content = ({ title, text }) => {
  const post = {title: title, summary: text};

  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
      <p>{post.summary}</p>
    </div>
  );
};

export default Content;
