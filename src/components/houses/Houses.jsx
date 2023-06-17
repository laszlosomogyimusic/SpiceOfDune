import React from 'react'
import './houses.css';

import { atreides, benegesserit, emperor, fremen, guild, harkonnen, mentat } from './imports';

const Houses = () => {
  return (
    <section className="houses section--padding">
      <figure className="houses__figure">
        <img className="houses__image" src={atreides} alt="atreides" />
      </figure>
      <figure className="houses__figure">
        <img className="houses__image" src={benegesserit} alt="bene gesserit" />
      </figure>
      <figure className="houses__figure">
        <img className="houses__image" src={emperor} alt="emperor" />
      </figure>
      <figure className="houses__figure">
        <img className="houses__image" src={fremen} alt="fremen" />
      </figure>
      <figure className="houses__figure">
        <img className="houses__image" src={guild} alt="guild" />
      </figure>
      <figure className="houses__figure">
        <img className="houses__image" src={harkonnen} alt="harkonnen" />
      </figure>
      <figure className="houses__figure">
        <img className="houses__image" src={mentat} alt="mentat" />
      </figure>
    </section>
  )
}

export default Houses