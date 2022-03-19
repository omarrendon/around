import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { useStyles } from './styles';
import { addToFavorites, deleteToFavorites } from '../../redux/actions/addFavoritesActions';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const PriceCard = ({ rate, menu }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isSelect, setIsSelect] = useState({
    value: false,
    rate: ''
  });


  const handleLikeButton = (value) => {
    if (value.key === rate.key) {
      if (isSelect.value) {
        setIsSelect({ value: false, rate: '' });
        dispatch(deleteToFavorites({ vale: false, rate }));
      } else {
        setIsSelect({ value: true, rate });
        dispatch(addToFavorites({ value: true, rate }));
      }
    }
  };

  return (
    <Card className={classes.priceCardContainer}>
      <CardContent>
        <Grid container justifyContent='flex-end'>
          {!menu  && (
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleLikeButton(rate)}
            >
              <FavoriteIcon
                className={isSelect.rate.key === rate.key ? classes.priceCardActiveButton : classes.priceCardDesactiveButton}
              />
            </IconButton>
          )}
        </Grid>
        <Grid container justifyContent='space-evenly'>
          <Grid item>
            <Typography variant='subtitle1'>{rate.key || '-'}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>${rate.value || '-'}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}