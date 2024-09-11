import React, { useState } from 'react'
import { data, TabData } from '../Tabbing/TabData'
import './Tabbing.css'

const Tabbing = () => {

    const [tab, setTab] = useState(0);
    const [activeContent, setActiveContent] = useState(data[0]);
    const changeValue = (index) => {
        setTab(index);
        setActiveContent(data[index]);
    }

    return (
        <div>
            <div className="tabing">
                <ul className='list-unstyled p-3'>
                    {data.map((data, index) => {
                        return (
                            <li onClick={() => changeValue(index)} className={`p-2 m-2 ${tab === index ? 'activeBut' : 'activateBtn'}`}>{data.title}</li>
                        )
                    })}
                </ul>
                <div className="output d-inline-flex justify-content-center align-items-center w-50">
                    <p>{activeContent.des}</p>
                </div>
            </div>
        </div>
    )
}

export default Tabbing