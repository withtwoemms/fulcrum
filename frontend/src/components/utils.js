import React from 'react';
import Content from "./Content";

export const contentProvider = ({ title, text, html, key }={}) => {
  return (styles) =>
    <Content title={title} text={text} html={html} key={key} styles={styles} />
}

export const interpolate = (string, withReplacement) => {
  return string.replace(/{(.*?)}/, withReplacement)
}

export const goTo = (pathname) => {
  window.location.pathname = pathname
}

