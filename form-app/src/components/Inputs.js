import React from 'react';

const Inputs = ({ label, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Inputs;
