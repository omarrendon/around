import React, { useState } from 'react';
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
} from '@mui/material';
import { useStyles } from './styles';
import { ItemList } from './ItemList';
import { useSelector } from 'react-redux';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Logo from '../../assets/logo.png';

export const NavBar = () => {
  const classes = useStyles();
  const { favorites } = useSelector(state => state.favorites);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div>
      <AppBar position='fixed' className={classes.navBarContainer} >
        <Toolbar variant='dense'>
          <Grid container justifyContent='space-between'>
            <img src={Logo} alt='Logotipo' className={classes.navBarLogo} />
            <IconButton
              onClick={() => setIsOpenMenu(true)}
            >
              <FilterAltIcon fontSize='large' className={classes.navBarIcon} />
              {favorites.length === 0 ? '' : '+' + favorites.length}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='right'
        open={isOpenMenu}
        onClose={() => setIsOpenMenu(false)}
      >
        <ItemList
          setIsOpenMenu={(value) => setIsOpenMenu(value)}
          isOpenMenu={isOpenMenu}
        />
      </Drawer>
    </div>
  )
}