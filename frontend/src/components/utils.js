import React from 'react';
import Form from "./content/Form";
import Post from "./content/Post";
import DropdownList from "./html/DropdownList";
import InputList from "./html/InputList";
import RadioGroup from "./html/RadioGroup";

export const contentProvider = ({ title, text, html, key, type, elementProviders }={}) => {
  const contentTypes = {
    'form': (styles) => <Form title={title} text={text} html={html} key={key} elementProviders={elementProviders} styles={styles} />,
    'post': (styles) => <Post title={title} text={text} html={html} key={key} styles={styles} />,
  }
  return (styles) => contentTypes[type](styles)
}

export const dropdownListProvider = ({ name, options }) => {
  return (register, errors) => <DropdownList name={name} options={options} register={register} />
}

export const inputListProvider = ({ info }) => {
  return (register, errors) => <InputList info={info} register={register} errors={errors} />
}

export const radioGroupProvider = ({ label, name, options }) => {
  return (register, errors) => <RadioGroup label={label} name={name} options={options} inputRef={register} />
}

export const interpolate = (string, withReplacement) => {
  return string.replace(/{(.*?)}/, withReplacement)
}

export const linkStyle = (color = '#fff') => {
  return {
    textDecoration: 'none',
    color: color,
  }
}

