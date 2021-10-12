/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
              <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-6.png" alt="Netflix" />
            </div>
            <div className="header--user">
              <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User" />
            </div>
        </header>
    );
}