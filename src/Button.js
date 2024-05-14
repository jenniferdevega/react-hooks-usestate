import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  /* 
    To display the scope details used in settings.json
      In command Palette --> Inspect Editor Tokens and Scopes 
  */

  useImperativeHandle(ref, () => {});
  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button From Child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
