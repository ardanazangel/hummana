'use client'; // Debes usar 'use client' para importar en el lado del cliente en Next.js

import "./grid.css";
import React, { useEffect } from 'react';

const Grid = () => {

  const toggleGridClass = () => {
    const gridElement = document.getElementById('grid');
    const gridBut = document.getElementById('gridbut');
    if (gridElement) {
      gridElement.classList.toggle('on');
      gridBut.classList.toggle('on');
    }
  };

  return (
    <>
      <div id='gridbut' onClick={toggleGridClass}></div>
      <div id="grid">
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
      </div>
    </>
  );
};

export default Grid;
