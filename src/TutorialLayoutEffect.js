import { useLayoutEffect, useEffect, useRef } from "react";

const TutorialLayoutEffect = () => {
    const inputRef = useRef(null);

    /*
        The useLayoutEffect is called before than useEffect upon rendering.
        Because useLayoutEffect is fundamentally called in an earlier stage of your page rendering than useEffect.
        When react recognizes that they need to render the components it goes to different stages: 
            1. Understanding where the component is
            2. Understanding if there's any changes to the state of the component
            3. Rendering the component
            4. Printing the value of the components to the website or actually showing it to the user
                Here's where it changes between the useEffect and useLayoutEffect
                    When we call the useEffect, it will do everything it can to show and print the stuff to the user and then call 
                        the useEffect. Most of the time the useEffect is only called after you render the page because it changes so fast
                        we don't seee the changes appearing.
                    However, for API calls it takes a while to load the data

                    useEffect is called after everything render to the page and shown to the user, where useLayoutEffect is before
    */
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return(
        <div className="App">
            <h1>06 useLayoutEffect</h1>
            <input ref={inputRef} value="PEDRO" style={{width: 440, height: 100, fontWeight:"bold"}} />   
        </div>
    )
};

export default TutorialLayoutEffect;