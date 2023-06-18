import React from 'react'
import './feature.css'

const Feature = ({ layout, titleColor, title, text }) => {
  let sectionClass = (layout === "row" ? "feature--row" : "feature--column");
  return (
    <article className={`feature ${sectionClass}`}>
      <header className="feature__header">
        <div className="feature__decoration"/>
        <h1 className="feature__title"  style={{color: titleColor}}>{title}</h1>
      </header>
      <article className="feature__body feature-body--row">
        <p className="feature__text">{text}</p>
      </article>
    </article>
  )
}

export default Feature
