import { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { PriceCard } from '../priceCard/PriceCard';

export const ResultCards = ({ order }) => {
  const classes = useStyles();
  const { currencies, isLoading, findCurrency } = useSelector(state => state.currencies);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    if (order) {
      let sortRates = order === 'Descendentemente'
        ? rates.slice(0).sort((a, b) => b.value - a.value)
        : rates.slice(0).sort((a, b) => a.value - b.value);
      setRates(sortRates);
    }
  }, [order])


  useEffect(() => {
    const objectRates = currencies?.rates;
    if (objectRates && !findCurrency) {
      const cleanValues = Object.entries(objectRates).map((values) => {
        const [key, value] = values;
        return {
          key,
          value
        }
      });
      setRates(cleanValues);
    }
  }, [currencies?.rates, findCurrency]);

  useEffect(() => {
    if (findCurrency) {
      const filterValues = rates.filter((rate) => {
        return (rate.key.indexOf(findCurrency) !== -1);
      });
      setRates(filterValues);
    }
  }, [findCurrency]);

  return (
    <>
      {isLoading && (
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          display='flex'
          flexDirection='column'
          className={classes.resultCardsGridContainer}
        >
          <CircularProgress className={classes.resultCardsProgress} />
          <Typography variant='h4'> Cargando</Typography>
        </Grid>
      )}
      {rates.length === 0 ? (
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          display='flex'
          flexDirection='column'
          className={classes.resultCardsGridContainer}
        >
          <Typography variant='h4'>No se encontraron resultados.</Typography>
        </Grid>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {rates.map((rate) => (
              <Grid item xs={2} sm={4} md={2} key={rate.key}>
                <PriceCard rate={rate} key={rate.key} menu={false} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

    </>
  )
}
