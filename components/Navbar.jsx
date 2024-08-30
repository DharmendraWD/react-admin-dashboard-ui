import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faExpandArrowsAlt, faUserCog, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react'
import { contextData } from '../Context/Context'




const Navbar = () => {
  const ContextData = useContext(contextData)


  const handleFullScreen = () => {
    // Handle fullscreen toggle logic here
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
  };

  

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav" onClick={ContextData.handleAsideWidth}>
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </li>
      </ul>

      <div className="navbar-nav pl-2">
        <ol className="breadcrumb p-0 m-0 bg-white">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </div>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={handleFullScreen}
            href="#"
            role="button"
          >
            <FontAwesomeIcon icon={faExpandArrowsAlt} />
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link p-0 pr-3" data-toggle="dropdown" href="#" style={{display:"flex", alignItems:"center"}}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/17653/17653304.png"
              alt="User Avatar"
              style={{width:"33px"}}
            />
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-3">
            <h4 className="h4 mb-0">
              <strong>Mohit Singh</strong>
            </h4>
            <div className="mb-3">example@example.com</div>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <FontAwesomeIcon icon={faUserCog} className="mr-2" /> Settings
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <FontAwesomeIcon icon={faLock} className="mr-2" /> Change Password
            </a>
            <div className="dropdown-divider"></div>
            <a
              href="#"
              className="dropdown-item text-danger"
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
