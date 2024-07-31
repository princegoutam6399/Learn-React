import React, { useState } from 'react'

const Hooks = () => {
    let name = "ROHAN";

    const handleClick = ()=>{
        name = 'Raju';
        console.log(name);
    }

    const [vname ,setName] = useState('Raju');
    const Click=()=>{
        setName("Aman");
    }

    const [age,setAge]= useState(35);


  return (
    <div className='pt-2'>
        <p>{name}</p>
        <button onClick={handleClick} className='btn btn-outline-info'>Click Me</button>
        <p>{vname}</p>
        <button onClick={Click} className='btn btn-outline-info'>Click to Change Name</button>
        <p className='pt-3'>{name} is {age} years old</p>

    </div>
  )
}

export default Hooks