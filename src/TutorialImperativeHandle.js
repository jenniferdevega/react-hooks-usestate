import React, { useRef } from "react";
import Button from "./Button";

// Parent component
const TutorialImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button>Button From Parents</button>
      <Button />
    </div>
  );
};

export default TutorialImperativeHandle;
