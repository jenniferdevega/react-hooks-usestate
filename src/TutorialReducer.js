import React, { useReducer } from "react";

//standard function every single time you use the useReducer
const reducer = (state, action) => { 
    switch (action.type) { 
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state;
    }
};

const TutorialReducer = () => { 
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
    
    return (
        <div>
            <h1>02 Reducer Tutorial</h1>
            <h2>{state.count}</h2>
            <button
                onClick={() => { 
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "toggleShowText" });
                }}
            >
                Click Here
            </button>

            { state.showText && <p>This is a text</p>}
        </div>
    ); 
};

export default TutorialReducer;