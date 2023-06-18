import React, { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.png'


const MenuLinks = (props) => {
  var classText = (props.isHamburgerMenu) ? "navbar__menuitem--hamburger" : "navbar__menuitem--horizontal";
  
  return (
    <>
    <p className={`navbar__menuitem ${classText}`}><a href="#home">Home</a></p>
    <p className={`navbar__menuitem ${classText}`}><a href="#whatisspice">What is Spice?</a></p>
    <p className={`navbar__menuitem ${classText}`}><a href="#possibility">Melange</a></p>
    <p className={`navbar__menuitem ${classText}`}><a href="#features">Effects</a></p>
    <p className={`navbar__menuitem ${classText}`}><a href="#blog">Library</a></p>            
    </>
  );
}

const HorizontalMenu = () => (
  <div className="navbar__menu">
    <MenuLinks isHamburgerMenu={false} />
  </div>

)

const HamburgerMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar__hamburgermenu-wrapper">
    {toggleMenu
    ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
    : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
  }
  {toggleMenu && (
    <div className="navbar__hamburgermenu scale-up-center">
      <MenuLinks isHamburgerMenu={true} />
      <SignElements isHamburgerMenu={true}/>
    </div>
  )}
  </div>
  );
}

const SignElements = (props) => {
  var classText = (props.isHamburgerMenu) ? "navbar__hamburgermenu-sign" : "navbar__horizontal-sign";

  return (
  <div className={classText}>
    <p className="navbar__menuitem navbar__menuitem--hamburger">Sign in</p>
    <button className="navbar__button" type="button">Sign up</button>
  </div>
  );
}

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar__menu-wrapper">
        <figure className="navbar__logo">
          <img className="navbar__image" src={logo} alt="logo" />
        </figure>
        <HorizontalMenu />
      </div>
      <SignElements isHamburgerMenu={false}/>
      <HamburgerMenu />
    </nav>
  )
}

export default Navbar