import React, { useEffect, useState } from 'react';

const ImageSearch = ({ apiKey }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.pexels.com/v1/curated?per_page=12", {
          headers: {
            Authorization: apiKey,
          },
        });
        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchImages();
  }, [apiKey]);

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src.medium} alt={image.photographer} />
        </div>
      ))}
    </div>
  );
};

export default ImageSearch;
