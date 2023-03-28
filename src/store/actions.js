// actions.js
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_BREEDS = 'SET_BREEDS';

export function toggleFavorite(imageUrl) {
  return {
    type: TOGGLE_FAVORITE,
    payload: imageUrl,
  };
}

export function setBreeds(breeds) {
  return {
    type: SET_BREEDS,
    payload: breeds,
  };
}
