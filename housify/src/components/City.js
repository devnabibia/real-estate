import React from 'react';
import '../styles.css';
import Icon from './Icon';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const City = () => {
  return (
    <button className="city topItem">
      <span className="cityText">
        <FmdGoodIcon/> Nairobi
      </span>
    </button>
  );
};

export default City;
