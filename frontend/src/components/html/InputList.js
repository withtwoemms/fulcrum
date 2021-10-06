import React from 'react';

const InputList = ({ info, register, errors }) => {
  return (
    info.map((item) => (
      <div>
        <input
          type={item.type}
          placeholder={item.placeholder}
          {...register(item.key, item.validator)}
        />
        {errors[item.key] && <span>This is required</span>}
      </div>
    ))
  )
};

export default InputList;
