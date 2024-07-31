import React, { useState } from 'react'


const TextCompo = () => {

    const title = "Welcome";
    const likes = 50;
    const comments = 20;

    const [count,setCount]=useState(0);
  return (
    <div>
        <h2>{title}</h2>
        <p>{likes} Liked  and {comments} Comments</p>
        <button className='btn btn-outline-danger' onClick= {()=>setCount((count)=>count+1)}>Count is {count}</button>
    </div>
  )
}

export default TextCompo