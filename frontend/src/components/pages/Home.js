import React from 'react';
import Layout from "../layout/Layout";
import { contentProvider } from "../utils";

const contentTitle = 'Here\'s a blog post title';
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function Home({ windowState }) {
  const instructionalContent = (key) => contentProvider({
    title: 'Hello',
    text: 'Text in this list belongs to a "Content" component. Content components are passed as a collection to a "Layout" component for rendering. A "Page" is a simple component that receives windowState, provides content, and returns a Layout. This page is the "Home" page.',
    key: key
  })
  const genericContentPartial = (key) => contentProvider({
    title: contentTitle,
    text: loremIpsum,
    key: key
  })

  let numberOfGenericPosts = 3
  const contentList = [instructionalContent].concat(
    Array.from({ length: numberOfGenericPosts }, () => genericContentPartial)
  ).map((contentPartial, i) => contentPartial(i + 1))

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Home;
