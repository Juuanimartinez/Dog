import { TOGGLE_FAVORITE, SET_BREEDS } from './actions';

const initialState = {
  favorites: [],
  breeds: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const isFavorite = state.favorites.includes(action.payload);
      const newFavorites = isFavorite
        ? state.favorites.filter((imageUrl) => imageUrl !== action.payload)
        : [...state.favorites, action.payload];
      return { ...state, favorites: newFavorites };

    case SET_BREEDS:
      return { ...state, breeds: action.payload };

    default:
      return state;
  }
};

export default reducer;
