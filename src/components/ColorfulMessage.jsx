import React from "react";

const ColorfulMessage = (props) => {
  console.log("color");
  const { color, children } = props;
  const contentStyle = {
    fontSize: "20px",
    backgroundColor: color
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
