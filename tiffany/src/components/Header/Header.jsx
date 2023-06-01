import React from 'react';
import logoTiffany from './assets/tiffany.svg';
import contactUs from './assets/contact-us.svg';
import search from './assets/search.svg';
import locator from './assets/locator.svg';
import boockAn from './assets/boockAn.svg';
import login from './assets/login.svg';
import wishlist from './assets/wishlist.svg';
import minicart from './assets/minicart.svg';

import './styles.css';
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header_container">
          <div className="container-left">
            <a href="#" className="container-anchor">
              <img
                src={search}
                alt="search icon"
                className="container-left-icon"
              />
            </a>
            <a href="#" className="container-anchor">
              <img
                src={locator}
                alt="locator icon"
                className="container-left-icon"
              />
            </a>
            <a href="#" className="container-anchor">
              <img
                src={contactUs}
                alt="contact-us icon"
                className="container-left-icon"
              />
              Contact Us
            </a>
          </div>
          <div className="container-center">
            <img src={logoTiffany} alt="" className="logo-tiffany" />
          </div>
          <div className="container-right">
            <a href="#" className="container-anchor">
              <img
                src={boockAn}
                alt="contact-us icon"
                className="container-right-icon"
              />
              Book an Appointment
            </a>
            <a href="#" className="container-anchor">
              <img
                src={login}
                alt="search icon"
                className="container-right-icon"
              />
            </a>
            <a href="#" className="container-anchor">
              <img
                src={wishlist}
                alt="locator icon"
                className="container-right-icon"
              />
            </a>
            <a href="#" className="container-anchor">
              <img
                src={minicart}
                alt="locator icon"
                className="container-right-icon"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
