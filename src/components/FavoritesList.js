import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FavoritesList.scss';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const FavoritesList = ({ favorites, setFavorites }) => {
  const handleRemoveFavorite = (image) => {
    const updatedFavorites = favorites.filter((favorite) => favorite !== image);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-list">
      <h1>Favoritos</h1>
      <IconButton component={Link} to="/">
        <HomeIcon />
      </IconButton>
      <div className="favorites-grid">
        {favorites.map((image, index) => (
          <div key={index} className="favorite-image-container">
            <img src={image} alt="Dog" className="favorite-image" />
            <button onClick={() => handleRemoveFavorite(image)}>
              {favorites.includes(image) ? (
                <FavoriteIcon style={{ color: 'red' }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
