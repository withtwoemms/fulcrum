import React from 'react';
import Layout from "../layout/Layout";
import { contentProvider, interpolate } from "../utils";

function NotFound({ windowState }) {
  const contentList = [
    contentProvider({
      title: '404',
      text: 'No page found at the path above.',
      html: interpolate('<code>{}</code>', window.location.pathname),
      key: 1
    })
  ]

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default NotFound;
