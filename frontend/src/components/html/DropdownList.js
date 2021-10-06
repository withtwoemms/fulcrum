import React from 'react';

const DropdownList = ({ name, options, register }) => {
  return (
    <select {...register(name)}>
      { options.map((item) => <option value={item}>{item}</option>) }
    </select>
  )
};

export default DropdownList;
