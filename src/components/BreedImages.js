import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDogImages } from '../services/dogApi';
import '../styles/BreedImages.scss';

const BreedImages = () => {
  const { breed, subBreed } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getDogImages(breed, subBreed).then((imageData) => setImages(imageData));
  }, [breed, subBreed]);

  return (
    <div>
      <h1>Imágenes de {subBreed ? `${subBreed} ${breed}` : breed}</h1>
      {images.length === 0 && <p>Cargando imágenes...</p>}
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${breed} dog`} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default BreedImages;
