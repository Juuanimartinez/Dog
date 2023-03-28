import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api';

export const getBreeds = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds/list/all`);
    console.log('API Response:', response.data.message);
    const breedsArray = Object.keys(response.data.message);
    return breedsArray;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    return [];
  }
};


export const getSubBreeds = async (breed) => {
  try {
    const response = await axios.get(`${BASE_URL}/breed/${breed}/list`);
    return response.data.message;
  } catch (error) {
    console.error(`Error fetching sub-breeds for ${breed}:`, error);
    return [];
  }
};

export const getDogImages = async (breed, subBreed = null) => {
  const breedPart = subBreed ? `${breed}/${subBreed}` : breed;
  try {
    const response = await axios.get(`${BASE_URL}/breed/${breedPart}/images`);
    return response.data.message;
  } catch (error) {
    console.error(`Error fetching images for ${breedPart}:`, error);
    return [];
  }
};
