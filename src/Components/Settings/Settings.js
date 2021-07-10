// Library
import React from 'react';
import { Fade } from 'react-reveal';

// import
import './Settings.css';

const Settings = () => {
  return (
    <div className='container-content'>
      <h2>AppNote</h2>

      <Fade right>
        <p>Technologies utilisées ...</p>
      </Fade>
      <ul>
        <Fade left>
          <li>React</li>
          <li>React-reveal pour les animations</li>
          <li>Redux pour la gestion du state</li>
          <li>Firebase pour la gestion de l'authentification</li>
          <li>Firebase pour la gestion de la base de données pour les notes</li>
        </Fade>
      </ul>
    </div>
  );
};

export default Settings;
