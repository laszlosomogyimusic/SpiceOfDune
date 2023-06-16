import React from 'react'
import './whatSpice.css';
import Feature from '../../components/feature/Feature'

const WhatSpice = () => {
  return (
    <main className="whatspice section--margin" id="whatisspice">
      <section className="whatspice__top-section">
        <Feature
          position="top"
          title="What is the Spice?"
          text="The Spice Melange, commonly referred to simply as 'the spice', was a naturally produced awareness spectrum narcotic that formed a fundamental block of commerce and technological development in the known universe for millennia.  It also played an important role in travel and cultural development as it is vital for space travel by enabling Navigators to safely guide space ships through fold space." 
        />
      </section>
      <header className="whatspice__header">
        <h1 className="whatspice__title gradient__text">The possibilities are beyond your imagination</h1>
        <button className="whatspice__button" type="button">Explore The Library</button>
      </header>
      <section className="whatspice__bottom-section">
        <Feature
          position="bottom"
          title="Origins"
          text="The spice originated on the planet Arrakis, where it was produced deep beneath the sands. It was created in a process whereby the fungal excretions of sandtrout would mix with water to form a pre-spice mass. " 
        />
        <Feature
          position="bottom"
          title="Characteristics"
          text="Spice is the basis for many of the things found in Fremen daily life - it can be processed to create things such as spice paper, spice fibre or chemical explosives. It could also be refined to create spice essence or spice gas." 
        />
        <Feature
          position="bottom"
          title="Value"
          text="During the days of the Corrino Empire, the spice was the rarest and most valuable commodity in the known universe. It was said that it was so valuable that one briefcase full of spice would be enough to purchase an entire planet. " 
        />
      </section>

    </main>
  )
}

export default WhatSpice