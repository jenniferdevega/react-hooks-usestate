import React, { forwardRef, useImperativeHandle, useState } from "react";

//make this as reference
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  /* 
    To display the scope details used in settings.json
      In command Palette --> Inspect Editor Tokens and Scopes 
  */

  useImperativeHandle(ref, () => ({
    // returns an object
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <br />
      <button>Button From Child</button>
      <br />
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
