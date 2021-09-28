import React from 'react';
import Form from "./content/Form";
import Post from "./content/Post";

export const contentProvider = ({ title, text, html, key, type }={}) => {
  const contentTypes = {
    'form': (styles) => <Form title={title} text={text} html={html} key={key} styles={styles} />,
    'post': (styles) => <Post title={title} text={text} html={html} key={key} styles={styles} />,
  }
  return (styles) => contentTypes[type](styles)
}

export const interpolate = (string, withReplacement) => {
  return string.replace(/{(.*?)}/, withReplacement)
}

export const linkStyle = (color = '#fff') => {
  return {
    textDecoration: 'none',
    color: color,
  }
}

