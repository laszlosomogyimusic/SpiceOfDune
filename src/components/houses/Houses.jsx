import React from 'react'
import './houses.css';

import { atreides, benegesserit, emperor, fremen, guild, harkonnen, mentat } from './imports';

const Houses = () => {
  return (
    <div className="houses houses--padding">
      <div className="houses__image-wrapper">
        <img className="houses__image" src={atreides} alt="atreides" />
      </div>
      <div className="houses__image-wrapper">
        <img className="houses__image" src={benegesserit} alt="bene gesserit" />
      </div>
      <div className="houses__image-wrapper">
        <img className="houses__image" src={emperor} alt="emperor" />
      </div>
      <div className="houses__image-wrapper">
        <img className="houses__image" src={fremen} alt="fremen" />
      </div>
      <div className="houses__image-wrapper">
        <img className="houses__image" src={guild} alt="guild" />
      </div>
      <div className="houses__image-wrapper">
        <img className="houses__image" src={harkonnen} alt="harkonnen" />
      </div>
      <div className="houses__image-wrapper">
        <img className="houses__image" src={mentat} alt="mentat" />
      </div>
    </div>
  )
}

export default Houses