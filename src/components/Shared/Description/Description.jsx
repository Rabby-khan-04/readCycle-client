import React from "react";

const Description = ({ text, width }) => {
  return (
    <p className={`text-grayText font-poppins text-base ${width}`}>{text}</p>
  );
};

export default Description;
