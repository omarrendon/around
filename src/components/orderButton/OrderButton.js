import { Button } from '@mui/material'
import { useStyles } from './styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState } from 'react';

export const OrderButton = ({ setOrder }) => {
  const classes =  useStyles();
  const [valueButton, setValueButton] = useState('Descendentemente');

  const handleOrderRates = () => {
    const value = valueButton === 'Descendentemente' ? 'Ascendentemente': 'Descendentemente';
    setValueButton(value);
    setOrder(value);
  };

  return (
      <Button
        startIcon={valueButton === 'Descendentemente' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon /> }
        variant='contained'
        onClick={handleOrderRates}
      >
        {valueButton}
      </Button>
  )
}
