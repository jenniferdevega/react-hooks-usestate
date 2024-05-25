import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function useMemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  // recreated and re-rendered as the state changes
  // should only be re-rendered once the data changes.
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  /* 
  useMemo Hook 
    - Working with more advance stuff, improved performance and reduce latency in 
  computation
 */

  // Dependency array, the second argument of useMemo Hook
  //Memoir function?
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="App">
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
