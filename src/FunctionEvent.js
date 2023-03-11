import React from 'react';

const FunctionEvent = () => {

   const clickHandler = () => {
        alert("Function click")
    }

    return (
        <div>
            <button onClick={clickHandler}>Function Event</button>
        </div>
    );
};

export default FunctionEvent;