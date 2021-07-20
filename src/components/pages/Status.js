import React from 'react';
import Layout from "../layout/Layout";
import contentProvider from "../utils";

function Status({ windowState }) {
  const contentList = [
    contentProvider('Sup!', 'Ensures that SPA routing works. In the future, this page will broadcast the status of the application.', 1)
  ]

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Status;
