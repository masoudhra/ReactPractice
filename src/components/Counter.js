import React, { useState } from 'react';

const Counter = () => {

    const [number, setNumber] = useState(0);


    const clickHandler = () =>{
        setNumber(number + 2)
    }


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={clickHandler}>Up Two</button>
        </div>
    );
};

export default Counter;