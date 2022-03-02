import React from 'react';
import uniqid from 'uniqid';

import { Card } from './Card';

const RenderCards = ( props ) => {
  return (
    <div className='card-container'>
      { props.array.map(( card ) => {
        return <Card icon={ card.icon } name={ card.name } function={ props.function } key={ uniqid() }/>
      })}
    </div>
  );
};

export { RenderCards };