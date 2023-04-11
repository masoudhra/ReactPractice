import React, { useState } from 'react';

const Counter = () => {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Masoud")


    const clickHandler = () => {
        setNumber(prevNumber => prevNumber + 2)
    }
    const nameHandler = () => {
        setName("masoudi")
    }


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={clickHandler}>Up Two</button>
            <h1>{name}</h1>
            <button onClick={nameHandler}>Change Name</button>
        </div>
    );
};

export default Counter;