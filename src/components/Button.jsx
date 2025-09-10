import React from 'react'

const Button = ({name, style}) => {
  return (
    <div className="flex">
      <button className={`px-5 py-2 text-[#ffffff] text-l font-normal rounded-md font-space ${style}`}>
        {name}
      </button>
    </div>
  );
}

export default Button