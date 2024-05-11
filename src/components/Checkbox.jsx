import React from 'react';

function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="mr-2 cursor-pointer" />
      {label}
    </label>
  );
}

export default Checkbox;