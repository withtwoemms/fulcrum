import React from 'react';
import Layout from "../layout/Layout";
import contentProvider from "../utils";

const contentTitle = 'Here\'s a blog post title';
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function Home({ windowState }) {
  const contentList = [
    contentProvider('Hello', 'Text in this list belongs to a "Content" component and Content components are belong to a collection ultimately passed to a "Layout" component. A "page" is a simple component that receives windowState, provides content, and returns a Layout. This page is the "Home" page.'),
    contentProvider(contentTitle, loremIpsum),
    contentProvider(contentTitle, loremIpsum),
    contentProvider(contentTitle, loremIpsum)
  ]

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Home;
