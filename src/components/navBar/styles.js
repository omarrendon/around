import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  navBarContainer: {
    backgroundColor: '#FD8898 !important'
  },
  navBarLogo: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '10px',
    width: '10%',
    '@media (max-width: 680px)': {
      width: '20%',
    },
  },
  navBarIcon: {
    color: '#000000'
  },
  itemListContainer: {
    width: '200px !important',
    height: '100%'
  },
})
