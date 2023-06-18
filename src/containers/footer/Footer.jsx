import React from 'react'
import './footer.css';

import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer section--padding">
      <header className="footer__header">
        <h1 className="footer__title gradient__text">Do you want to step in to the future before others</h1>
      </header>
      <section className="footer__button">
        <p className="footer__button-text">Request Early Access</p>
      </section>
      <section className="footer__body">
        <figure className="footer__figure footer__body--size">
          <img className="footer_image" src={logo} alt="logo" />
        </figure>
        <article className="footer__links footer__body--size">
          <h4 className="footer__link-title">Links</h4>
          <p className="footer__link-text">Overons</p>
          <p className="footer__link-text">Social Media</p>
          <p className="footer__link-text">Counters</p>
          <p className="footer__link-text">Contact</p>
        </article>
        <article className="footer__links footer__body--size">
          <h4 className="footer__link-title">Company</h4>
          <p className="footer__link-text">Terms & Conditions</p>
          <p className="footer__link-text">Privacy Policy</p>
          <p className="footer__link-text">Contact</p>
        </article>
        <article className="footer__links footer__body--size">
          <h4 className="footer__link-title">Get in touch</h4>
          <p className="footer__link-text">Arrakis</p>
          <p className="footer__link-text">1234-443221-1233</p>
          <p className="footer__link-text">managment@arrakis.planet</p>
        </article>
      </section>
      <section className="footer__copyright">
        <p className="footer__copyright-text">© 2023 Spice Melange. All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer