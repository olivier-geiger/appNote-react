// Library
import React from 'react';
import { Fade } from 'react-reveal';

//import
import './ListNotes.css';

const ListNotes = () => {
  return (
    <Fade top>
      <div className='container-content'>
        <h2>Voici vos notes !</h2>
      </div>
    </Fade>
  );
};

export default ListNotes;
