import React from "react"
import "../styles/styles.scss"

//Import components
import Header from "../components/header"
import Banner from "../components/Banner"
import AboutBlurb from "../components/aboutBlurb"
import Cards from "../components/Cards"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    <Cards />
  </div>
)

export default IndexPage
