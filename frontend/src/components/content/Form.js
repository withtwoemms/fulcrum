import React from "react";
import { useInput } from '../hooks';

const Form = ({ title, text, html='', key=null }) => {
  const { value, bind, reset } = useInput('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${value}`);
    reset();
  }

  return (
    <div key={key} style={{ marginBottom: 40 }}>
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <div style={{ marginTop: 20 }}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" {...bind} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
