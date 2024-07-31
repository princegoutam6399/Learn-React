import React from 'react'

const BgChanger = () => {

    const DarkMode = ()=>{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }
    const LightMode = ()=>{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }

  return (
    <div className='pt-4'>
        <button onClick={DarkMode} className='btn btn-outline-primary m-4'>Dark Mode</button>
        <button onClick={LightMode} className='btn btn-outline-primary'>Light Mode</button>
    </div>
  )
}

export default BgChanger