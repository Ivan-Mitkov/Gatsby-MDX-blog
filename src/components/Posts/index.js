import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        <article>
          {posts.map(p => {
            return <Post key={p.id} {...p} />
          })}
        </article>
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
