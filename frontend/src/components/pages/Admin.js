import React, { useEffect, useState } from 'react';
import Layout from "../layout/Layout";
import { contentProvider } from "../utils";

function Admin({ windowState }) {
  const [APIResult, setAPIResult] = useState([])

  let fetched = false;

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
    .then(data => {
      setAPIResult(JSON.parse(data).succeeded)
      fetched = true;
    })
  }

  useEffect(() => {getData()}, [fetched])

  const contentList = APIResult.map((item, i) => {
    return contentProvider({
      type: 'post',
      text: JSON.stringify(item),
      key: i,
    })
  })

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Admin;
