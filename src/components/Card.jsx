import React from "react";


const Card = (props) => {
  return (
    <div className="p-5 rounded-lg shadow-md bg-white">
      {props.children}
    </div>
  );
}

export default Card;
