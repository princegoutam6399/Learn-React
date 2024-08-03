import React, { useState } from 'react'

const Calculator = () => {


    const[value,setValue]=useState('');

    const handleBtn=(e)=>{
        setValue(value +e.target.innerHTML);
    }

    const handleOperator=(e)=>{
        const operators = ['+', '-', '*', '/', '%', '.'];
        if (value.length === 0 || !operators.includes(value.slice(-1))) {
            setValue(value + e.target.innerHTML);
        }
    }

    const handleEqual=()=>{
        setValue(eval(value));
    }

    const handleDel=()=>{
        setValue(value.toString().slice(0,-1));
    }
    const handleClear=()=>{
        setValue("");
    }

    return (
        <div className='container pt-5 h-100'>
            <div className="bg-danger-subtle pt-4 hero">
                <div className="text">
                    <h2 className='fs-2'>Calculator</h2>
                </div>
                <div className='inputBox' id="outputBox">
                    <input type="text" value={value}/>
                </div>
                <div className="buttons">
                    <button onClick={handleDel}>Del</button>
                    <button onClick={handleClear}>C</button>
                    <button onClick={handleOperator}>/</button>
                    <button onClick={handleOperator}>( )</button>
                </div>
                <div className="buttons">
                    <button onClick={handleBtn}>9</button>
                    <button onClick={handleBtn}>8</button>
                    <button onClick={handleBtn}>7</button>
                    <button onClick={handleOperator}>.</button>
                </div>
                <div className="buttons">
                    <button onClick={handleBtn}>6</button>
                    <button onClick={handleBtn}>5</button>
                    <button onClick={handleBtn}>4</button>
                    <button onClick={handleOperator}>*</button>
                </div>
                <div className="buttons">
                    <button onClick={handleBtn}>3</button>
                    <button onClick={handleBtn}>2</button>
                    <button onClick={handleBtn}>1</button>
                    <button onClick={handleOperator}>%</button>
                </div>
                <div className="buttons">
                    <button onClick={handleEqual}>=</button>
                    <button onClick={handleBtn}>0</button>
                    <button onClick={handleOperator}>-</button>
                    <button onClick={handleOperator}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator