

import React, { useEffect, useState } from 'react';

const Logger = () => {

    const [number, setNumber] = useState(0);
    const [second, setSecond] = useState(0)

// agar arayeye payin ke dakhelesh number ozashtim ra khali begozarim
// faghat mounting ettefah miofte
    useEffect(() => {
        console.log(number);
    }, [number])



    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>up One</button>
            <br />
            <br />
            <button onClick={() => setSecond(prevSecond => prevSecond + 2)}>up Two</button>
            <h1>{second}</h1>

        </div>
    );
};

export default Logger;