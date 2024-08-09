import React, { useEffect, useState, useCallback } from 'react';

const SearchImage = () => {
  const [query, setQuery] = useState("birds");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPhotos = useCallback(async () => {
    if (query.trim() === "") return;

    setLoading(true);
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();
      setData(result.photos);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  const onKeyDownHandle = (e) => {
    if (e.keyCode === 13 && query.trim() !== "") {
      getPhotos();
    }
  };

  return (
    <div className='container pt-3'>
      <input
        className='input w-75 p-2 fs-4'
        onKeyDown={onKeyDownHandle}
        placeholder='Search Anything'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />

      {loading && <h1>Fetching...</h1>}
      <div className="container">
        {data.map((item) => (
          <div className="item-box" key={item.id}>
            <img src={item.src.medium} alt={item.photographer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchImage;
