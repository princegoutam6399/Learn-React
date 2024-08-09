import React, { useState } from 'react';

const ImageApp = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const apiKey = "Fk9aP3wAgI080TaMXPAUzSvjqrDLQ-DZ7HTcnTOEWVk";

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const getData = () => {
        getPhotos();
    };

    const getPhotos = async () => {
        if (!search) return;

        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?page=2&query=${search}`,
                {
                    headers: {
                        Authorization: `Client-ID ${apiKey}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const jsonData = await response.json();
            setData(jsonData.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='container-fluid'>
            <div className="head-text mt-2">
                <h2 className='text-danger'>Image Search App</h2>
            </div>
            <div className="inputs d-flex justify-content-center">
                <input
                    type="text"
                    className='w-50 p-1 fs-5'
                    placeholder='Search Anything'
                    onChange={handleSearch}
                />
                <button className='btn btn-outline-dark ms-2 ps-3 pe-3' onClick={getData}>
                    Search
                </button>
            </div>
            <div className="container-fluid  d-grid mt-3" >
                <div className="row" >
                    <div className="col">
                        {data.map((curVal) => (
                            <img src={curVal.urls.small} alt={curVal.alt_description} key={curVal.id} className="m-2"  />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageApp;
