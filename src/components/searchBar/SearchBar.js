import { InputAdornment, TextField } from '@mui/material';
import { useStyles } from './styles';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { findCurrency } from '../../redux/actions/fetchDataActions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleFetchData = debounce((state) => {
    dispatch(findCurrency(state.toUpperCase()));
  }, 1000);

  return (
    <TextField
      id="outlined-basic"
      fullWidth
      label="Buscar ..."
      variant="outlined"
      className={classes.searchBarInput}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <AttachMoneyIcon color='success' />
          </InputAdornment>
        )
      }}
      onChange={(e) => handleFetchData(e.target.value)}
    />
  )
}
