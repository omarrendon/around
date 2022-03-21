import { Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataFromAPI, findCurrency } from '../../redux/actions/fetchDataActions';
import { PriceCard } from '../priceCard/PriceCard';
import { useStyles } from './styles';

export const ItemList = ({ setIsOpenMenu, isOpenMenu }) => {
  const { favorites } = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSelectFavorite = (favorite) => {
    const { key } = favorite?.rate;
    setIsOpenMenu(!isOpenMenu);
    dispatch(fetchDataFromAPI(key));
    dispatch(findCurrency(''));
  };

  return (
    <Grid
      container
      justifyContent='center'
      alignContent={favorites.length === 0 ? 'center' : 'flex-start'}
      className={classes.itemListContainer}
    >
      {favorites.length === 0 ? (
        <Typography variant='h6'>Sin registros</Typography>
      ) : (
        favorites.map((favorite) => (
          <div
            key={favorite.rate.key}
            onClick={() => handleSelectFavorite(favorite)}
          >
            <PriceCard
              rate={favorite.rate}
              menu={true}
            />
          </div>
        ))
      )}
    </Grid>
  )
}
