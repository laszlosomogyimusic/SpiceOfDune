import React from 'react'
import './whatSpice.css';
import Feature from '../../components/feature/Feature'

import featuresData from './data.json';

const WhatSpice = () => {
  return (
    <section className="whatspice section--margin" id="whatisspice">
      <section className="whatspice__top-section">
        <Feature
          layout="row"
          titleColor="#FFFFFF"
          title="What is the Spice?"
          text="The Spice Melange, commonly referred to simply as 'the spice', was a naturally produced awareness spectrum narcotic that formed a fundamental block of commerce and technological development in the known universe for millennia.  It also played an important role in travel and cultural development as it is vital for space travel by enabling Navigators to safely guide space ships through fold space." 
        />
      </section>
      <header className="whatspice__header">
        <h1 className="whatspice__title gradient__text">The possibilities are beyond your imagination</h1>
        <button className="whatspice__button" type="button">Explore The Library</button>
      </header>
      <section className="whatspice__bottom-section">
        {featuresData.map((item, index) => ( 
          <Feature
            layout="column"
            titleColor="#FFFFFF"
            title={item.title}
            text={item.text} 
            key={item.title + index}
          />
         )) }

      </section>

    </section>
  )
}

export default WhatSpice