import { FAVORITES_ADD, FAVORITES_DELETE } from '../types/types';

export const addToFavorites = (favorite) => ({
  type: FAVORITES_ADD,
  payload: favorite
});

export const deleteToFavorites = (deleteFavorite) => ({
  type: FAVORITES_DELETE,
  payload: deleteFavorite,
});