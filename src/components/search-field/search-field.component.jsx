import React from 'react';
import './search-field.styles.css';

export const SearchField = ({ placeHolder, eventHandler }) => (
  <input className='search'
    type='search'
    placeholder={ placeHolder }
    onChange={ eventHandler }>
  </input>
);
