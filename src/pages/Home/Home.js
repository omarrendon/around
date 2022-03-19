import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { fetchDataFromAPI } from '../../redux/actions/fetchDataActions';
import { NavBar, ResultCards, SearchBar, OrderButton } from '../../components/index'

function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [order, setOrder] = useState('');

  useEffect(() => {
    dispatch(fetchDataFromAPI())
  }, [])

  return (
    <>
      <NavBar />
      <main className={classes.homeContainer}>
        <Grid container justifyContent='center' space={3}>
          <Grid item xs={12} sm={12} md={6} className={classes.homeSearchContainer}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} sm={12} md={2} className={classes.homeButtonContainer}>
            <OrderButton setOrder={(value) => setOrder(value)} />
          </Grid>
        </Grid>
        <div className={classes.homeResultsContainer}>
          <ResultCards order={order} />
        </div>
      </main>
    </>
  )
}

export default Home