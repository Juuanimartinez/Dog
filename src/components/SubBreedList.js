import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getSubBreeds, getDogImages } from '../services/dogApi';
import LoadingIndicator from './LoadingIndicator';
import '../styles/SubBreedList.scss';

const SubBreedList = () => {
  const { breed } = useParams();
  const [subBreeds, setSubBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubBreeds, setSelectedSubBreeds] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const updateFavoritesFromLocalStorage = () => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoritesFromLocalStorage);
    setFavoriteCount(favoritesFromLocalStorage.length);
  };

  useEffect(() => {
    setLoading(true);
    getSubBreeds(breed).then((subBreedData) => {
      if (subBreedData.length === 0) {
        getDogImages(breed).then((imageData) => {
          setImages(imageData);
          setLoading(false);
        });
      } else {
        setSubBreeds(subBreedData);
        setLoading(false);
      }
    });
    updateFavoritesFromLocalStorage();
  }, [breed, updateFavoritesFromLocalStorage]);

  useEffect(() => {
    if(selectedSubBreeds.length === 0) {
      setImages([]);
      return;
    }
  
    setLoading(true);
    Promise.all(
      selectedSubBreeds.map((subBreed) => getDogImages(breed, subBreed))
    ).then((imageDataArrays) => {
      const combinedImages = imageDataArrays.flat();
      setImages(combinedImages);
      setLoading(false);
    });
  }, [selectedSubBreeds, breed]);
  
  useEffect(() => {
    window.addEventListener('focus', updateFavoritesFromLocalStorage);
  
    return () => {
      window.removeEventListener('focus', updateFavoritesFromLocalStorage);
    };
  }, []);
  
  const handleSubBreedClick = (subBreed) => {
    if (selectedSubBreeds.includes(subBreed)) {
      setSelectedSubBreeds(selectedSubBreeds.filter((sb) => sb !== subBreed));
    } else {
      setSelectedSubBreeds([...selectedSubBreeds, subBreed]);
    }
  };
  
  const handleFavoriteClick = (image) => {
    if (favorites.includes(image)) {
      localStorage.setItem('favorites', JSON.stringify(favorites.filter((fav) => fav !== image)));
      setFavorites(favorites.filter((fav) => fav !== image));
      setFavoriteCount(favoriteCount - 1);
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, image]));
      setFavorites([...favorites, image]);
      setFavoriteCount(favoriteCount + 1);
    }
  };
  
  if (loading) {
    return <LoadingIndicator />;
  }
  
  return (
    <div>
      <div className="sub-breed-header">
        <Link to="/">Volver a inicio</Link>
        <Link to="/favorites" className="favorite-link">
          Favoritos<span className="favorite-count">{favoriteCount}</span>
        </Link>
      </div>
      <h1>Sub-razas de {breed}</h1>
      {subBreeds.length > 0 ? (
        <ul>
          {subBreeds.map((subBreed) => (
            <li key={subBreed}>
              <button
                onClick={() => handleSubBreedClick(subBreed)}
                style={{
                  backgroundColor: selectedSubBreeds.includes(subBreed)
                    ? 'lightblue'
                    : 'white',
                }}
              >
                {subBreed}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {images.length > 0 && (
        <div className="image-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={favorites.includes(image) ? 'image-container favorite' : 'image-container'}
              >
                <img src={image} alt={`Dog ${index}`} />
                <button onClick={() => handleFavoriteClick(image)}>
                  {favorites.includes(image) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
    };
    
    export default SubBreedList;
    