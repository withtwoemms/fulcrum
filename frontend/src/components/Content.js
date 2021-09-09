import React from "react";

const Content = ({ title, text, html='', key=null }) => {
  const post = {title: title, text: text, html: html};

  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
      <p>{post.text}</p>
    </div>
  );
};

export default Content;
