import React, { useContext } from "react";
import { AppContext } from "./TutorialUseContext";

const User = () => {
  const { username } = useContext(AppContext);

  return (
    <>
      <h2>User: {username}</h2>
    </>
  );
};

export default User;
