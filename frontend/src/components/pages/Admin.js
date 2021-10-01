import React, { useEffect, useState } from 'react';
import Layout from "../layout/Layout";
import { contentProvider } from "../utils";

function Admin({ windowState }) {
  const [APIResult, setAPIResult] = useState([])

  let fetched = false;

  async function getData() {
    await fetch(`${document.URL}_`, {
      method: 'GET',
      mode: 'cors',
    })
    .then(response => {
      let text = response.text()
      text.then(text => { setAPIResult(JSON.parse(text).result) })
    })
    .finally(() => {
      fetched = true
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
