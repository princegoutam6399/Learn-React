import React, { useState } from 'react'

const ColorGererator = () => {

    const [color,setColor]= useState('');
    
    const generate = () => {
        var symbols = "0123456789ABCDEF";
        var newColor = "#";

        for(let i=0;i<6;i++){
            newColor = newColor+symbols[Math.floor(Math.random()*16)];
        }
        setColor(newColor);

    }


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 id='hex' style={{ color }}>{color}</h2>
            <button onClick={generate} className='btn btn-outline-dark'>Generate Color</button>
        </div>
    )
}

export default ColorGererator