import React, { useState } from 'react'
import data from './Data.json'

const SelectOptions = () => {

    const [country,setCountry] = useState("");
    const [cities,setCities] = useState([]);

    return (
        <div className='p-4 bg-danger-subtle'>
            <select  className='m-3' style={{width:"150px"}} onChange={(e)=>{
                const countries = e.target.value;
                console.log(countries);
                setCountry(countries);  

                const selectedCities = data.filter(
                    item => item.country === countries
                ).map(item =>item.city);
                setCities(selectedCities);
            }}>
                {
                    data.map((item, index) => {
                        return (
                            <option value={item.country} key={index}>{item.country}</option>
                        )
                    })
                }
            </select>
            <select style={{width:"150px"}}>
                {cities.map((city,index)=>{
                        return (
                            <option value={city} key={index}>{city}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SelectOptions