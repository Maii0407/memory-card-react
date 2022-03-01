import React, { useState } from 'react';

const Gameboard = () => {
  const [ agumon, setAgumon ] = useState({ name: 'AGUMON', icon: '' });
  const [ gabumon, setGabumon ] = useState({ name: 'GABUMON', icon: '' });
  const [ tentomon, setTentomon ] = useState({ name: 'TENTOMON', icon: '' });
  const [ palmon, setPalmon ] = useState({ name: 'PALMON', icon: '' });
  const [ piyomon, setPiyomon ] = useState({ name: 'PIYOMON', icon: '' });
  const [ gomamon, setGomamon ] = useState({ name: 'GOMAMON', icon: '' });
  const [ patamon, setPatamon ] = useState({ name: 'PATAMON', icon: '' });
  const [ tailmon, setTailmon ] = useState({ name: 'TAILMON', icon: '' });

  return (
    <div className='card-container'></div>
  );
};

export { Gameboard };