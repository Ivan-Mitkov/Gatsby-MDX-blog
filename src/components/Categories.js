import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`
const Categories = () => {
  const data = useStaticQuery(query)
  const {
    allMdx: { distinct },
  } = data
  return (
    <ul className="categories">
      {distinct.map((item, i) => {
        return (
          <li key={i}>
            <Link to={`/${item}`} className="category">
              {item}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
