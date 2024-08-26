import React, { useState } from 'react';

const ClickToChange = () => {
    const [arr, setArr] = useState(["Mango", "Orange", "Pear", "Grapes"]);

    const handleChange = () => {
        const newArr = arr.map((item, index) => {
            if(index ===1){
                return `${item} - changed`;
            }
            return item;
        });
        setArr(newArr);
    }

    return (
        <div>
            <div onClick={handleChange}>ClickToChange</div>
            <ul className='list-unstyled mb-3'>
                {arr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ClickToChange;
