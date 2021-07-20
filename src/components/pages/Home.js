import React from 'react';
import Content from "./../Content";
import Layout from "./../layout/Layout";

const contentProvider = (title, text) => {
  return (styles) => <Content title={title} text={text} styles={styles} />
}

function Home({ windowState }) {
  const contentList = [
    contentProvider('HELLO', 'sup.'),
    contentProvider('GOODBYE', 'sup!')
  ]

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Home;
