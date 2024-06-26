import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TutorialState from "./TutorialState";
import TutorialReducer from "./TutorialReducer";
import TutorialEffect from "./TutorialEffect";
import TutorialRef from "./TutorialRef";
import TutorialLayoutEffect from "./TutorialLayoutEffect";
import TutorialImperativeHandle from "./TutorialImperativeHandle";
import TutorialUseContext from "./UseContext/TutorialUseContext";
import UseMemoTutorial from "./UseMemo/UseMemoTutorial";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <TutorialState />
    <TutorialReducer />
    <TutorialEffect />
    <TutorialRef />
    <TutorialLayoutEffect />
    <TutorialImperativeHandle />
    <TutorialUseContext />
    <UseMemoTutorial />
  </React.StrictMode>
);

reportWebVitals();
