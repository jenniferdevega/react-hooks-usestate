import React, { useRef } from "react";
import Button from "./Button";

// Parent component
const TutorialImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <h1>07 useImperative</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parents
      </button>

      {/* 
        To make the Button/Child component as reference, import the useRef 
      */}
      <br />
      <Button ref={buttonRef} />
    </div>
  );
};

export default TutorialImperativeHandle;
