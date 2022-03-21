import { useState } from 'react';
import { Button } from '@mui/material'
import { useStyles } from './styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const OrderButton = ({ setOrder }) => {
  const classes = useStyles();
  const [valueButton, setValueButton] = useState(false);
  const statusValue = !valueButton ? 'Descendentemente' : 'Ascendentemente';
  
  const handleOrderRates = () => {
    setValueButton(!valueButton);
    setOrder(statusValue);
  };

  return (
    <Button
      startIcon={!valueButton ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
      variant='contained'
      onClick={handleOrderRates}
    >
      {statusValue }
    </Button>
  )
}
