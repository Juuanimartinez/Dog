import React, { useState, useEffect } from 'react';
import LoadingIndicator from './LoadingIndicator';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../styles/FavoritesList.scss';


const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoritesFromLocalStorage);
    setLoading(false);
  }, []);

  const handleRemoveFavoriteClick = (image) => {
    const newFavorites = favorites.filter((fav) => fav !== image);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.length > 0 ? (
        <div className="image-grid">
          {favorites.map((image) => (
            <div key={image} className="image-block favorite">
              <img src={image} alt="Favorite" />
              <button onClick={() => handleRemoveFavoriteClick(image)}>
                <FavoriteIcon style={{ color: 'red' }} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tienes imágenes favoritas.</p>
      )}
    </div>
  );
};

export default FavoriteList;
