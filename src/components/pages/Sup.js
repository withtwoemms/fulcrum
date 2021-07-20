import React from 'react';
import Layout from "./../layout/Layout";
import contentProvider from "../utils";

function Sup({ windowState }) {
  const contentList = [
    contentProvider('Sup!', 'ensures that SPA routing works.')
  ]

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Sup;
