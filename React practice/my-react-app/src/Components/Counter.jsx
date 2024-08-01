import React, { useState } from 'react'

const Counter = () => {

    const [index,setIndex]=useState(0);

    const inc = () => {
        setIndex(index+1);
    }
    const dec = () => {
        if(index>0){
            setIndex(index-1);
        }
    }
    const reset = () => {
        setIndex(0);
    };



    return (
        <div>
            <div className="container  mt-4 d-flex justify-content-center align-items-center"  style={{ height: "150px", width: "200px" }}>
                <h2 className="text fs-1" id='#output'>{index}</h2>
            </div>

            <div className="buttons">
                <button className='btn btn-outline-dark m-2 text-bg-success' onClick={inc}>Increase</button>
                <button className='btn btn-outline-dark m-2' onClick={reset}>Reset</button>
                <button className='btn btn-outline-dark m-2 text-bg-danger' onClick={dec}>Decrease</button>
            </div>
        </div>
    )
}

export default Counter