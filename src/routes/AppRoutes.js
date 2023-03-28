import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BreedList from '../components/BreedList';
import SubBreedList from '../components/SubBreedList';
import BreedImages from '../components/BreedImages';
import FavoritesList from '../components/FavoritesList';

const AppRoutes = ({ favorites, setFavorites }) => {
  return (
    <Routes>
      <Route path="/" element={<BreedList favorites={favorites} setFavorites={setFavorites} />} index />
      <Route path="/sub-breeds/:breed" element={<SubBreedList favorites={favorites} setFavorites={setFavorites} />} />
      <Route path="/sub-breeds/:breed/:subBreed" element={<BreedImages favorites={favorites} setFavorites={setFavorites} />} />
      <Route path="/breed/:breed/images" element={<BreedImages favorites={favorites} setFavorites={setFavorites} />} />
      <Route path="/favorites" element={<FavoritesList favorites={favorites} />} />
    </Routes>
  );
};

export default AppRoutes;
