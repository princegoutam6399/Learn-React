import React from 'react'
import './text.css'

export default function Mode() {
  const switchTheme = (e)=>{
    if(e.target.checked){
      document.querySelector('body').setAttribute('data-theme','dark')
    }
    else{
      document.querySelector('body').setAttribute('data-theme','light')

    }
  }
  return (
    <div>
      <div className='fs-1 text-center text-primary'>Hello India</div>
      <div>
        <label class="switch">
          <input type="checkbox"></input>
            <span class="slider round"></span>
        </label>
      </div>
    </div>
  )
}
