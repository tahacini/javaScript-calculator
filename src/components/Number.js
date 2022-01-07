import React from "react";

function Number({ val, style, placeHolder, click, id }) {
  return (
    <button className={style} value={val} onClick={() => click(val)} id={id}>
      {placeHolder}
    </button>
  );
}

export default Number;
