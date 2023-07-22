import React from "react";

const Button = ({color, onClick, text }) => {
  return (
    <div>
      <button style={{backgroundColor: color}} onClick={onClick} className="btn">
        {text}
      </button>
    </div>
  );
};

export default Button;
