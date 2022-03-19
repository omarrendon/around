import {
  FETCH_DATA_LOADING,
  FECTH_DATA_SUCCESS,
  FECTH_DATA_ERROR,
  FETCH_DATA_FIND_CURRENCY,
} from "../types/types";

const initialState = {
  isLoading: false,
  modalSuccess: {
    show: false,
    message: '',
  },
  modalError: {
    show: false,
    message: '',
  },
  currencies: [],
  findCurrency: '',
};

const fetchDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FECTH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currencies: action.payload,
      };
    case FECTH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        modalError: {
          show: true,
          message: 'Ha ocurrido un error, intente más tarde.',
        },
      };
    case FETCH_DATA_FIND_CURRENCY:
      return {
        ...state,
        findCurrency: action.payload
      };
    default:
      return state;
  }
};

export default fetchDataReducers;