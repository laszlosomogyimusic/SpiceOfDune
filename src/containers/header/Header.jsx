import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import shaiHulud from '../../assets/shaihulud.png'

function Header() {
  return (
    <div className="header header--padding" id="header">
      <div className="header__wrapper">
        <h1 className="header__h1 gradient__text">He who controls the spice controls the universe</h1>
        <p className="header__paragraph header__paragraph--large">I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.</p>
        <div className="header__input-wrapper">
          <input className="header__input" type="email" placeholder="Your Email Address"/>
          <button className="header__button" type="button">Get Started</button>
        </div>
        <div className="header__people">
          <img className="header__people-image" src={people} alt="people"/>
          <p className="header__paragraph header__paragraph--small">8+ billion people tried the spice in the last 24 hours</p>
        </div>
      </div>
      <div className="header__image-wrapper">
        <img className="header__image" src={shaiHulud} alt="ladybug" />
      </div>
    </div>
  )
}

export default Header