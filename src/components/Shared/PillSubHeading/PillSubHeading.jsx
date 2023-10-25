import React from "react";

const PillSubHeading = ({ text, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="inline-block py-1 px-6 rounded-full"
    >
      <span className="font-poppins text-xs italic tracking-wide uppercase">
        {text}
      </span>
    </div>
  );
};

export default PillSubHeading;
