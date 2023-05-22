// import React, { useState, useEffect } from 'react';

// // API
// import { getCoin } from '../services/api';

// //Components
// import loader from './loader';





// const Landing = () => {
    
    
//     const [coins, setCoins] = useState([])

//     useEffect(() => {

//         const fetchAPI = async () => {
//             const data = await getCoin();
//             console.log(data)
//             setCoins(data)

//         }
//         fetchAPI()

//     }, [])


//     return (
//         <>
        
//             <input type="text" placeholder='Search' />
//             {
//                 coins.length ? 
//                     coins.map(coin => <p>{coin.name}</p>):
//                     <loader />
//             }
        
        
//         </>
//     );
// };

// export default Landing;

import { useEffect, useState } from 'react';

import { getCoin } from "../services/api"


import React from 'react';

const Landing = () => {

    const [coins, setCoins] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }
        fetchAPI()

    }, [])



    return (
        <>
            <input type="text" placeholder= "Search"  />
            <div>
                {
                    coins.map(coin => <p key={coin.id}> {coin.name} </p>)
                }
            </div>

            
        
        
        </>
    );
};

export default Landing;