import React, { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import './styles/App.scss';

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="App">
      <AppRoutes favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}

export default App;
