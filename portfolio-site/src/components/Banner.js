import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      lineMain: file(relativePath: { eq: "line-drawing-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Jeff Graham</div>
          <div className="main-image">
            <Img fluid={data.lineMain.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll Down</span>
        </div>
      </div>
      <div className="fixed-misc">Web Design and Development</div>
    </div>
  )
}

export default Banner
