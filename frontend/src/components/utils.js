import React from 'react';
import Content from "./Content";

const contentProvider = (title, text, key) => {
  return (styles) => <Content key={key} title={title} text={text} styles={styles} />
}

export default contentProvider;
