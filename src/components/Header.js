import React from 'react';

const Header = ( props ) => {
  return (
    <div className='header-container'>
      <h1>{ props.innerText }</h1>
    </div>
  );
};

export { Header };