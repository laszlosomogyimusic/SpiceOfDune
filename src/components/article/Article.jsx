import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
  return (
    <article className="article">
      <figure className="article__figure">
        <img className="article__image" src={imgUrl} alt="blog" />
      </figure>
      <section className="article__body">
        <header className="article__header">
          <p className="article__date">{date}</p>
          <h3 className="article__title">{title}</h3>
        </header>
        <p className="article__link">Read Full Article</p>
      </section>
    </article>
  )
}

export default Article
