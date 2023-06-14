import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import human from '../../assets/human.png'
import ladybug from '../../assets/ladybug.png'

function Header() {
  return (
    <div className="header section__padding" id="header">
      <div className="header__content">
        <h1 className="header__h1 gradient__text">Let's see what humanity can do when they come together</h1>
        <p className="header__paragraph header__paragraph--large">We are creators. We are powerful. Let's co-create a better world.</p>
        <div className="header__input-wrapper">
          <input className="header__input" type="email" placeholder="Your Email Address"/>
          <button className="header__button" type="button">Get Started</button>
        </div>
        <div className="header__people">
          <img className="header__people-image" src={people} alt="people"/>
          <p className="header__paragraph header__paragraph--small">8+ billion people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__image-wrapper">
        <img className="header__image" src={ladybug} alt="ladybug" />
      </div>
    </div>
  )
}

export default Header