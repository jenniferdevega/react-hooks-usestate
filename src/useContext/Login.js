import React, { useContext } from "react";
import { AppContext } from "./TutorialUseContext";

const Login = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <>
      <h1>08 useContext</h1>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </>
  );
};

export default Login;
