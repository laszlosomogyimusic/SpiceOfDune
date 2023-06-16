import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import shaiHulud from '../../assets/shaihulud.png'

const Header = () => {
  return (
    <main className="header section--padding" id="header">
      <header className="header__header">
        <h1 className="header__title gradient__text">He who controls the spice controls the universe</h1>
        <p className="header__text header__text--large">I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.</p>
        <div className="header__input-wrapper">
          <input className="header__input" type="email" placeholder="Your Email Address"/>
          <button className="header__button" type="button">Get Started</button>
        </div>
        <figure className="header__people">
          <img className="header__people-image" src={people} alt="people"/>
          <p className="header__text header__text--small">8+ billion people tried the spice in the last 24 hours</p>
        </figure>
      </header>
      <figure className="header__figure">
        <img className="header__image" src={shaiHulud} alt="ladybug" />
      </figure>
    </main>
  )
}

export default Header