import { FAVORITES_ADD, FAVORITES_DELETE } from '../types/types';

const initialState = {
  favorites: []
};

const addFavoritesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITES_ADD:
      const findFavorites = state.favorites.find((item) => item.rate.key === action.payload.rate.key);

      if (findFavorites) {
        return {
          ...state,
          favorites: state.favorites.map((item) =>
            item.key === action.payload?.rate?.key
              ? { ...item}
              : item
          )
        }
      }
      else return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case FAVORITES_DELETE:
      const { key } = action.payload.rate;
      const items = state.favorites.filter((item) => item.rate.key !== key);
      return {
        ...state,
        favorites: items,
      };
    default:
      return state;
  }
};

export default addFavoritesReducers;
