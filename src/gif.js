import React from 'react';
import ReactGifPlayer from 'react';

function GifComponent() {
  return (
    <div style={{ width: '50%', paddingBottom: '66.66%' }}>
      <ReactGifPlayer gif="your-gif-url-here" still="your-still-image-url-here" />
    </div>
  );
}

export default GifComponent;
