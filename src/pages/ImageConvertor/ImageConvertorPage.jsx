import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import BASEURL from '../../constant/BaseApi';

const ImageConvertorPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [reducedImage, setReducedImage] = useState(null);
  const [size, setSize] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedImage) {
      if (!size) {
        window.alert('Please select a size');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('desiredSize', size);

        const response = await axios.post(`${BASEURL}image/reduce`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'arraybuffer', // Ensure binary data is received as ArrayBuffer
        });

        // Convert binary data to a data URL
        const reducedImageDataUrl = `data:image/jpeg;base64,${btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        )}`;

        // Set the reducedImage state with the data URL
        setReducedImage(reducedImageDataUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = reducedImage;
    link.download = 'reduced_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold mb-4">Image Converter</h1>
      <div className="mb-4 space-x-4">
        <button
          onClick={() => {
            setSize(50);
          }}
          className={`${
            +size === 50 ? 'bg-green-500' : 'bg-blue-500'
          } text-white py-2 px-4 rounded hover:bg-red-600`}
        >
          50
        </button>
        <button
          onClick={() => {
            setSize(100);
          }}
          className={`${
            +size === 100 ? 'bg-green-500' : 'bg-blue-500'
          } text-white py-2 px-4 rounded hover:bg-red-600`}
        >
          100
        </button>
        <button
          onClick={() => {
            setSize(200);
          }}
          className={`${
            +size === 200 ? 'bg-green-500' : 'bg-blue-500'
          } text-white py-2 px-4 rounded hover:bg-red-600`}
        >
          200
        </button>
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Enter the custom size"
          onChange={(e) => {
            setSize(e.target.value);
          }}
          className="py-2 px-4 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="py-2 px-4 border rounded"
        />
      </div>
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Convert Image
      </button>
      {reducedImage && (
        <div className="mb-4">
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Download Reduced Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageConvertorPage;
