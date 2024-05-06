import React, { useState } from 'react'
import { Data } from './Data';

export default function Faqs() {
    let [answer,setAnswer]=useState(Data[0].number)
    let FaqDetail = Data.map((items,i)=>{
           let FaqDetails =[
            items,
            answer,
            setAnswer
           ]
           return(
            <div>
                <Faqitems FaqDetails={FaqDetails} key={i}/>
            </div>
           )
    })
  return (
    <div>
        {FaqDetail}
    </div>
  )
}


function Faqitems({FaqDetails}){
    let [items,answer,setAnswer] = FaqDetails;
    return(
        <div className='faqitems'>
            <h2 onClick={()=>setAnswer(items.number)}>{items.question}</h2>
            <p className={answer===items.number ?'active':'Notactive'}>{items.answer}</p>
        </div>
    )
}