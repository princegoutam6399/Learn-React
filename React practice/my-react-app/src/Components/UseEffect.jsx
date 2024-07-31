import React, { useState } from 'react'

const UseEffect = () => {
    console.log('useEfect ran');

    const [name,setName]=useState('mario');

  return (
    <div>
        <button type="button" class="btn btn-outline-primary" onClick={()=>setName('Rohan')}>Change name</button>
        <p>{name}</p>
    </div>
  )
}

export default UseEffect