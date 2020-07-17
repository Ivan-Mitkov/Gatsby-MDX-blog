import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          author
          category
          title
          date(formatString: "MMMM, Do YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`
const CategoryTemplate = props => {
  console.log(props)
  const {
    data: {
      categories: { nodes: posts },
    },
    pageContext: { category },
  } = props

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category/${category}`} />
    </Layout>
  )
}

export default CategoryTemplate
