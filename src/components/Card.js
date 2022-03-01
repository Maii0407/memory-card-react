import React from 'react';

const Card = ( props ) => {
  return (
    <div className='card'>
      <img src={ props.icon } alt={ props.name }/>
      <p>{ props.name }</p>
    </div>
  );
};

export { Card };