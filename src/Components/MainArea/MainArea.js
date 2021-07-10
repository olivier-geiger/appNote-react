// Library
import React, { useState, useEffect, useRef } from 'react';
import { Fade } from 'react-reveal';

// import
import './MainArea.css';

const MainArea = () => {
  return (
    <Fade right>
      <div className='container-content'>
        <h2>Votre plume</h2>

        <form>
          <label htmlFor='title'>Le Titre</label>
          <input type='text' id='title' />

          <label htmlFor='subtitle'>Sous-titre</label>
          <input type='text' id='subtitle' />

          <label htmlFor='txtbody'>Votre Texte</label>
          <textarea id='txtbody' placeholder='Votre texte ...'></textarea>
        </form>

        <button>Enregister</button>
      </div>
    </Fade>
  );
};

export default MainArea;
