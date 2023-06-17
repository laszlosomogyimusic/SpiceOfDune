import React from 'react'
import { Feature } from '../../components';

import './features.css';

import featuresData from './data.json';

const Features = () => {
  return (
    <section className="features section--padding" id="features">
      <header className="features__header">
        <h1 className="features__title gradient__text">Since its discovery it was produced exclusively on the planet Arrakis</h1>
        <p className="features__text">Request Early Access to Get Started</p>
      </header>
      <article className="features__body">
        {featuresData.map((item, index) => (
          <Feature
            layout="row"
            titleColor="#000000"
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </article>
    </section>
  )
}

export default Features