import React from 'react';
import Content from "./Content";

const contentProvider = (title, text) => {
  return (styles) => <Content title={title} text={text} styles={styles} />
}

export default contentProvider;
