import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      totalCount
    }
  }
`
const Instagram = () => {
  const data = useStaticQuery(query)
  const {
    allInstaNode: { nodes },
  } = data
  return (
    <Wrapper>
      <Title title="instagram" />
      <div className="images">
        {nodes.map((image, i) => {
          return <Image key={i} fluid={image.localFile.childImageSharp.fluid} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
