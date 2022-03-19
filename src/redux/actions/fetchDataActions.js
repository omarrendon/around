import {
  FETCH_DATA_LOADING,
  FECTH_DATA_SUCCESS,
  FECTH_DATA_ERROR,
  FETCH_DATA_FIND_CURRENCY,
} from '../types/types';
import axios from 'axios';

export const fetchDataFromAPI = (currency = 'MXN') => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataLoading());
      const URL = `https://open.er-api.com/v6/latest/${currency}`;
      const { data } = await axios.get(URL);
      if (data.result == 'error') {
        return dispatch(fetchDataFromAPIError());
      }
      dispatch(fetchDataFromAPISuccess(data));
    } catch (error) {
      console.log('ERROR IN FETCH DATA FROM API => ', error);
      dispatch(fetchDataFromAPIError(error));
    }
  };
};

const fetchDataFromAPISuccess = (data) => ({
  type: FECTH_DATA_SUCCESS,
  payload: data
});

const fetchDataFromAPIError = (error) => ({
  type: FECTH_DATA_ERROR,
  payload: error
});

const fetchDataLoading = () => ({
  type: FETCH_DATA_LOADING
});

export const findCurrency = (currency) => ({
  type: FETCH_DATA_FIND_CURRENCY,
  payload: currency
});