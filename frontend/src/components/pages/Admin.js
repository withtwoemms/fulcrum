import React from 'react';
import Layout from "../layout/Layout";
import { contentProvider } from "../utils";

function Admin({ windowState }) {
  async function getData() {
    await fetch(document.URL, {
      method: 'GET',
      mode: 'cors',
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        console.log(`ERROR: ${response}`)
      }
    })
    .then(data => console.log('DATA: ', data))
  }

  const contentList = [
    contentProvider({
      type: 'post',
      text: `${getData()}`,
      key: 1
    })
  ]

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Admin;
