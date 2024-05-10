import React, { useState } from "react";

const TutorialState = () => { 
    const [inputValue, setInputValue] = useState("Eper");

    let onChange = (e) => { 
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    return (
        <div>
            <h1>01 State Hook</h1>
            <input
                placeholder="Enter something..."
                onChange={ onChange }
            />
            { inputValue }
        </div>
    );
};

export default TutorialState;