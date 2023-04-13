// import React, { useState } from 'react';

// const Form = () => {

//     const [data, setData] = useState(["item"]);


//     return (
//         <div>
            
//             <button onClick={() => setData([...data, "newItem"])}>Add</button>

//             <p>{JSON.stringify(data)}</p>
//         </div>
//     );
// };

// export default Form;
// import React, {useState} from 'react';

// const Form = () => {
//     const [number, setNumber] = useState(0)

//     const clickHandler = () =>{
//         setNumber(prevNumber => prevNumber + 3)

//     }


//     return (
//         <div>

//             <button onClick={clickHandler}>plus 3</button>
//             <h1>{number}</h1>
//         </div>
//     );
// };

// export default Form;

// import React, {useState} from 'react';

// const Form = () => {

//     const [data, setData] = useState({name: "", age: ""})


//     return (
//         <div>
//             <input type="text" value={data.name} onChange={event => setData({...data, name: event.target.value})} />
//             <input type="number" value={data.age} onChange={event => setData({...data, age: event.target.value})} />

//             <p>{JSON.stringify(data)}</p>
//         </div>
//     );
// };

// export default Form;

import React, { useState } from 'react';

const Form = () => {

    const [data, setData] = useState(["item"])


    return (
        <div>
            <button onClick={() => setData([...data, "newItem"])}>Add</button>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Form;