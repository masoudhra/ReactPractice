import React, { useState, useEffect } from 'react';

// API
import { getCoin } from '../services/api';





const Landing = () => {
    
    
    const [coin, setCoin] = useState([])

    useEffect(() => {

        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)

        }
        fetchAPI()

    }, [])


    return (
        <div>
            
        </div>
    );
};

export default Landing;