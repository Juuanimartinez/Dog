// LoadingIndicator.js
import React from 'react';
import '../styles/LoadingIndicator.scss';
import dogLoading from '../assets/dog-loading.png';

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <p>Loading</p>
      <img src={dogLoading} alt="Loading dog" /> {/* Cambiar aquí */}
    </div>
  );
};

export default LoadingIndicator;
