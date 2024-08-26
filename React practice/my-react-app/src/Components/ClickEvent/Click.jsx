import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { useState } from 'react'

const Click = () => {

    const [arr, setArr] = useState([
        { name: "Mango", isChecked: false },
        { name: "Orange", isChecked: false },
        { name: "Pear", isChecked: false },
        { name: "Grapes", isChecked: false }
    ]);

    const handleDelete = (index) => {
        const newArr = [...arr];
        newArr.splice(index, 1);
        setArr(newArr);
    }

    const handleChange = (index) => {
        const newArr = [...arr];
        newArr[index].isChecked = !newArr[index].isChecked;
        setArr(newArr);
    }

    return (
        <div>
            <ul className='list-unstyled mb-5 p-2'>
                {
                    arr.map((el, index) => (
                        <li key={index} className='mb-3'>
                            <input type="checkbox" checked={el.isChecked} onChange={() => handleChange(index)} />
                            {el.name}{el.isChecked && (
                                <button className='btn btn-outline-dark' onClick={()=>handleDelete(index)}>Delete Item</button>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Click