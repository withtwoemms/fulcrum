import React from "react";
import Layout from "../layout/Layout";
import { contentProvider } from "../utils";

function Contact({ windowState }) {
  const contentList = [
    contentProvider({
      type: 'form',
      title: 'Say Hello!',
      key: 1,
    })
  ]

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Contact;
