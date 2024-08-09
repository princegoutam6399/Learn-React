"use client"; // Ensure this is at the top if using Next.js with React Server Components

import React from 'react';
import ImageSearch from './ImageSearch';

const Client = () => {
  const pexelsApiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY || "7QPMDL8dMnRNUSNJzL3nUzuhdvSnHG1t0jk7pBsJkVkn4NkzZiKst9pa";

  return (
    <div className='items'>
      <div className="header">
        {/* Add header content here */}
      </div>

      <main>
        <ImageSearch apiKey={pexelsApiKey} />
      </main>
    </div>
  );
};

export default Client;
