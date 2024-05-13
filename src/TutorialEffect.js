import React, {useEffect, useState} from 'react';
import axios from "axios";

/*  To install axios
    axios - library for API calls
        npm install axios
        yarn add axios   
*/

const TutorialEffect=() => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
                console.log("API IS CALLED");
            }); 

        /*
            When the state like count is indicated in the [], it will be called whenever the state changes
                }, [count]);
            take into account whenever workin with APIs or React project in General. 
            It is recommended to specify the states that useEffect depends on.

            UseEffect is primarily use for making API calls as the page loads.
        */
    }, []);

    return (
        <div>
            <h1>03 useEffect</h1>
            <h2>{data}</h2>
            <h2>{count}</h2>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >Click Here</button>
        </div>
    );
};

export default TutorialEffect;