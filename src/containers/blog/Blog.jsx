import React from 'react'
import { Article } from '../../components';
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <section className="blog section--padding" id="blog">
      <header className="blog__header">
        <h1 className="blog__title gradient__text">A lot is happening, We are blogging about it.</h1>
      </header>
      <section className="blog__body">
        <section className="blog__main-article">
          <Article imgUrl={blog01} date="Sep 26, 10191" title="This is the map of Arrakis"/>
        </section>
        <section className="blog__sub-articles">
          <Article imgUrl={blog02} date="17, Sept 10192" title="Planet Arrakis from outer space"/>
          <Article imgUrl={blog03} date="01, Jan 10200" title="Not ideal for tourism"/>
          <Article imgUrl={blog04} date="20, Mar 10181" title="Breathtaking. Literally."/>
          <Article imgUrl={blog05} date="Sep 26, 10192" title="Is it even possible to have lush green on Arrakis?"/>
        </section>
      </section>
    </section>
  )
}

export default Blog