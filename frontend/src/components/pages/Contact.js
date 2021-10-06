import React from "react";
import Layout from "../layout/Layout";
import {
  contentProvider,
  dropdownListProvider,
  inputListProvider,
  radioGroupProvider,
} from "../utils";

function Contact({ windowState }) {
  const contentList = [
    contentProvider({
      type: 'form',
      title: 'Say Hello!',
      key: 1,
      elementProviders: [
        dropdownListProvider({
          name: "salutation",
          options: ["Mr", "Mrs", "Miss", "Dr"]
        }),
        inputListProvider({
          info: [
            {
              key: "firstName",
              placeholder: "First name",
              type: "text",
              validation: {required: true, maxLength: 80}
            },
            {
              key: "lastName",
              placeholder: "Last name",
              type: "text",
              validation: {required: true, maxLength: 100}
            },
            {
              key: "email",
              placeholder: "Email",
              type: "text",
              validation: {required: true, pattern: /^\S+@\S+$/i}
            },
            {
              key: "mobileNumber",
              placeholder: "Mobile Number",
              type: "tel",
              validation: {maxLength: 12}
            },
          ]
        }),
        radioGroupProvider({
          label: "What is your favorite fruit?",
          name: "fruit",
          options: [
            { label: "Apples", value: "apples" },
            { label: "Bananas", value: "bananas" },
            { label: "Cherries", value: "cherries" }
          ]
        })
      ]
    })
  ]

  return (
    <Layout contentProviders={contentList} windowState={windowState} />
  )
}

export default Contact;
