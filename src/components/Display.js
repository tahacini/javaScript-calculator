import React from "react";

function Display({ val, style, id }) {
  return (
    <div className={style} id={id}>
      {val}
    </div>
  );
}

export default Display;
