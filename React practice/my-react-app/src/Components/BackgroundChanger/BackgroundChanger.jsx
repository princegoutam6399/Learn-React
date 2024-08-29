import React, { useState } from 'react'

const BackgroundChanger = () => {

  const [colors, setColors] = useState("olive");

  return (
    <div className='min-vh-100' style={{backgroundColor:colors}}>
      <div className="bg-item pt-4 bg-body-teritory  d-flex justify-content-center">
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("black")} style={{backgroundColor:"black"}} className='btn text-white m-2  rounded-pill'>Black</button>
        </div>
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("skyblue")} style={{backgroundColor:"skyblue"}} className='btn m-2  rounded-pill'>SkyBlue</button>
        </div>
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("green")} style={{backgroundColor:"green"}} className='btn m-2 text-white rounded-pill'>Green</button>
        </div>
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("red")} style={{backgroundColor:"red"}} className='btn m-2 rounded-pill'>Red</button>
        </div>
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("yellow")} style={{backgroundColor:"yellow"}} className='btn m-2 rounded-pill'>Yellow</button>
        </div>
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("pink")} style={{backgroundColor:"pink"}} className='btn m-2 rounded-pill'>Pink</button>
        </div>
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("lavender")} style={{backgroundColor:"lavender"}} className='btn m-2 rounded-pill'>Lavender</button>
        </div>
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("purple")} style={{backgroundColor:"purple"}} className='btn m-2 text-white rounded-pill'>Purple</button>
        </div>
        <div className="btns m-2 bg-white rounded-pill">
          <button onClick={()=>setColors("lawngreen")} style={{backgroundColor:"lawngreen"}}  className='btn m-2 rounded-pill'>Lawgreen</button>
        </div>
      </div>
    </div>
  )
}

export default BackgroundChanger