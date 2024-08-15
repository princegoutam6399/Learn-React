import React from 'react'
import data from './Data.json'

const FetchData = () => {

    return (
        <div className='bg-warning-subtle '>
            {data.map((data, index) => {
                return (
                    <div className="border-4 bg-danger-subtle m-2" key={index}>
                        <h3>{data.id}</h3>
                        <p>{data.first_name}</p>
                        <p>{data.last_name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FetchData