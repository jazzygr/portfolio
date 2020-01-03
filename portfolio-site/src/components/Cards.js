import React, { Component } from "react"
import Card from "../components/Card"
import img1 from "../images/icon1.svg"
import img2 from "../images/icon2.svg"
import img3 from "../images/icon3.svg"
import img4 from "../images/icon4.svg"
import img5 from "../images/icon5.svg"
import img6 from "../images/icon6.svg"

class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className="rows">
          <Card imgsrc={img1} title="Console" />
          <Card imgsrc={img2} title="Develop" />
          <Card imgsrc={img3} title="Pay me bruh" />
          <Card imgsrc={img4} title="Good stuff" />
          <Card imgsrc={img5} title="Filler filler" />
          <Card imgsrc={img6} title="Seriously tho gimme money" />
        </div>
      </div>
    )
  }
}

export default Cards
