// Library
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import LogoEdit from './ImgsSidebar/edit.svg';
import FolderIcon from './ImgsSidebar/folder.svg';
import Tools from './ImgsSidebar/settings.svg';
import Menu from './ImgsSidebar/menu.svg';

import './Sidebar.css';

const Sidebar = () => {
  // State
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', checkWidthFunc);

    return () => {
      window.removeEventListener('resize', checkWidthFunc);
    };
  }, []);

  // Functions
  const checkWidthFunc = () => {
    setCheckWidth(window.innerWidth);
  };

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      {checkWidth < 900 && (
        <>
          <button className='toggle-nav-btn' onClick={toggleNavFunc}>
            <img src={Menu} alt='menu icon' />
          </button>
        </>
      )}
      <nav className={toggleNav ? 'container-sidebar visible-nav' : 'container-sidebar'}>
        <div className='sidebar'>
          <div className='three-dots'>
            <div className='dot-nav d-red'></div>
            <div className='dot-nav d-yellow'></div>
            <div className='dot-nav d-green'></div>
          </div>

          <ul>
            {/* <Link to='/'> */}
            <li>
              <img src={FolderIcon} alt='logo folder' />
            </li>
            {/* </Link> */}

            {/* <Link to='/edit'> */}
            <li>
              <img src={LogoEdit} alt='logo edit' />
            </li>
            {/* </Link> */}

            <li>
              <img src={Tools} alt='logo tools' />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
