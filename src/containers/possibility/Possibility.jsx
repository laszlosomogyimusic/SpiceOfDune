import React from 'react'
import './possibility.css';

import eyesOfIbadImage from '../../assets/eyesofibad.png'

const Possibility = () => {
  return (
    <section className="possibility section--padding" id="possibility">
      <figure className="possibility__figure">
        <img className="possibility__image" src={eyesOfIbadImage} alt="eyes of ibad" />
      </figure>
      <article className="possibility__body">
        <h4 className="possibility__subtitle">Request Early Access to Get Started</h4>
        <h1 className="possibility__title">The possibilities are beyond your imagination</h1>
        <p className="possibility__text">The spice originated on the planet Arrakis, where it was produced deep beneath the sands. It was created in a process whereby the fungal excretions of sandtrout would mix with water to form a pre-spice mass. This mass would then be brought to the surface of the desert through an explosion of pressure, and under the intense heat and air of Arrakis, melange would form. When the worms died, sandtrout would be released into the sand, and the cycle of creation would repeat. </p>
        <h4 className="possibility__subtitle  gradient__text">Request Early Access to Get Started</h4>
      </article>      
    </section>
  )
}

export default Possibility