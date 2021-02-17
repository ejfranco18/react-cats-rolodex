import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) => (
  <div className='card'>
    <img src={`https://robohash.org/${monster.id}?set=set4`} alt=""/>
    <h3>{monster.name}</h3>
    <p>{monster.email}</p>
  </div>
);
