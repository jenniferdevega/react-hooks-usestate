import React, {useRef} from "react";

const TutorialRef= () => {
    const inputRef = useRef(null);
    
    const onClick = () => {
        inputRef.current.focus();

        //clear
        inputRef.current.value = "";
    };

    return(
        <div>
            <h1>05 useRef</h1>
            <input 
                type="text"
                placeholder="Ex...."
                ref={inputRef}
            />
            <button onClick={onClick}>
                Change Name
            </button>
        </div>
    );
}

export default TutorialRef;