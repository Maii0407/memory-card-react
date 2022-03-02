import React from 'react';

const RenderCards = ( props ) => {
  return (
    <div className='card-container'>
      { props.array.map(( card ) => {
        return card;
      })}
    </div>
  );
};

export { RenderCards };