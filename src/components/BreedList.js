import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBreeds } from '../services/dogApi';
import LoadingIndicator from './LoadingIndicator';
import '../styles/BreedList.scss';

const BreedList = ({ favorites }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteCount, setFavoriteCount] = useState(favorites.length);

  useEffect(() => {
    setLoading(true);
    getBreeds().then((breedData) => {
      setBreeds(breedData);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setFavoriteCount(favorites.length);
  }, [favorites]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <div className="breed-header">
        <h1>Razas de perros</h1>
        <Link to="/favorites" className="favorite-link">
          Favoritos<span className="favorite-count">{favoriteCount}</span>
        </Link>
      </div>
      <ul className="breed-list">
        {breeds.map((breed) => (
          <li key={breed}>
            <Link to={`/sub-breeds/${breed}`}>
              {breed}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreedList;
