import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  priceCardContainer: {
    margin: '20px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px !important',
    borderRadius: '10px !important',
    minWidth: '170px',
    cursor: 'pointer'
  },
  priceCardActiveButton: {
    color: '#FD8898'
  },
  priceCardDesactiveButton: {
    color: '#E9E9E9'
  },
})
