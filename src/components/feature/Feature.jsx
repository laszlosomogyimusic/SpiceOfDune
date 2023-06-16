import React from 'react'
import './feature.css'

const Feature = ({ position, title, text }) => {
  let sectionClass = (position === "top" ? "feature--top-section" : "feature--bottom-section");
  return (
    <main className={`feature ${sectionClass}`}>
      <header className="feature__header">
        <div className="feature__decoration"/>
        <h1 className="feature__title">{title}</h1>
      </header>
      <article className="feature__body feature-body--row">
        <p className="feature__text">{text}</p>
      </article>
    </main>
  )
}

export default Feature
