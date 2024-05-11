
import React from 'react';

function Button({ onClick, children }) {
  return (
    <button className="rounded-lg text-sm border justify-center items-center bg-green-500 hover:bg-green-700 shrink-0 px-3 py-1" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
