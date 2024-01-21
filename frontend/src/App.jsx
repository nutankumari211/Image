// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAllMetadata, setShowAllMetadata] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/images');
      if (response.status === 200) {
        const imageData = response.data;
        setImages(imageData);
        setSelectedImage(imageData[0]); // Select the first image by default
      } else {
        console.error('Error fetching images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowAllMetadata(false); // Reset showAllMetadata when a new image is selected
  };

  const handleLoadMoreClick = () => {
    setShowAllMetadata(!showAllMetadata);
  };

  const handleDownloadClick = async () => {
    if (selectedImage) {
      try {
        const response = await fetch(`http://localhost:3000/images/${selectedImage.preview}`);
        const blob = await response.blob();
  
        // Create a link element
        const downloadLink = document.createElement('a');
        // Create a URL for the blob and set it as the href attribute
        const url = window.URL.createObjectURL(blob);
        downloadLink.href = url;
        // Specify the download attribute and filename
        downloadLink.download = selectedImage.fileName;
        // Trigger a click on the link to start the download
        downloadLink.click();
        // Release the URL object
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    }
  };
  
  return (
    <div className="container">
      <h1 className="title">Image Gallery</h1>
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${image === selectedImage ? 'selected' : ''}`}
            onClick={() => handleImageClick(image)}
          >
            <img src={`http://localhost:3000/images/${image.preview}`} alt="" />
          </div>
        ))}
      </div>
      <div className="main-view">
        {selectedImage && (
          <div className="selected-card">
            <div className="card-img-wrapper">
              <img
                src={`http://localhost:3000/images/${selectedImage.preview}`}
                alt=""
                className="card-img"
              />
            </div>
            <div className="card-details">
              <h3 className="card-title">{selectedImage.fileName}</h3>
              <ul className="metadata">
                <li>Aperture: {selectedImage.metadata.Aperture}</li>
                <li>File Size: {selectedImage.fileSize} bytes</li>
                <li>Lens Type: {selectedImage.metadata.LensType}</li>
                <li>Lens Model: {selectedImage.metadata.LensModel}</li>
                <li>Contrast: {selectedImage.metadata.Contrast}</li>
                <li>Scene Capture Type: {selectedImage.metadata.SceneCaptureType}</li>
                <li>White Balance: {selectedImage.metadata.WhiteBalance}</li>
                <li>Shutter Speed: {selectedImage.metadata.ShutterSpeed}</li>
                <li>ISO: {selectedImage.metadata.ISO}</li>
                {showAllMetadata &&
                  Object.entries(selectedImage.metadata).map(([key, value]) => (
                    <li key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}: {JSON.stringify(value)}
                    </li>
                  ))}
              </ul>
              <div className="button-group">
                <button className="load-more-btn" onClick={handleLoadMoreClick}>
                  {showAllMetadata ? 'Show Less' : 'Load More'}
                </button>
                <button className="download-btn" onClick={handleDownloadClick}>
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
