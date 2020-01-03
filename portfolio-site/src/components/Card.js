import React from "react"

const Card = props => {
  return (
    <div className="overflow">
      <div className="card">
        <img src={props.imgsrc} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic saepe
          culpa asperiores maxime provident beatae, illo vero neque delectus
          rerum fugiat quod! Odit esse similique minus facere, quod consectetur?
        </p>
      </div>
    </div>
  )
}

export default Card
