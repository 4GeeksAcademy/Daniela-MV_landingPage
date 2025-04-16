import React from "react";

const CardImage = (props) => {
  return (
    <div className="col-md-3 col-ms-12">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imagen} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          <a href="#" className="btn btn-primary">Haz click</a>
        </div>
      </div>
    </div>
  )
}

export default CardImage;