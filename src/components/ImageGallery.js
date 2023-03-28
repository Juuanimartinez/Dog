import React from 'react';
import '../styles/ImageGallery.scss';

const ImageGallery = ({ images, onToggleFavorite, favorites }) => {
  return (
    <div>
      <h2>Imágenes</h2>
      <div className="image-gallery">
        {images.map((imageUrl) => (
          <div key={imageUrl} className="image-container">
            <img src={imageUrl} alt="Dog" />
            <button onClick={() => onToggleFavorite(imageUrl)}>
              {favorites.includes(imageUrl) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
