import React from 'react';
import { useForm } from "react-hook-form";

const Form = ({ title, text, elementProviders, html='', key=null }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    save(data);
    reset({}, {
      keepErrors: true,
      keepDirty: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false,
    })
  }

  const save = (data) => {
    fetch(document.URL, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
    })
  }

  return (
    <div key={key} style={{ marginBottom: 40 }}>
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <p>{text}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {elementProviders.map((provider) => provider(register, errors))}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
