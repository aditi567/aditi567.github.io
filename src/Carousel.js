import React from "react";

const Carousel = (props)=>{
    return(
    <div>
      <div id="carouselControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require("./CET.jpeg")} alt="CET Result"/>
            <div className="carousel-caption bg-secondary rounded-pill d-md-block">
            <h5>CET Result: 98.83</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("./HSC.png")} alt="HSC Result"/>
            <div className="carousel-caption bg-secondary rounded-pill d-md-block">
            <h5>HSC Result: 90.46</h5>
            </div>`
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("./SSC.png")} alt="sSC Result"/>
            <div className="carousel-caption bg-secondary rounded-pill d-md-block">
            <h5>SSC Result: 94.60</h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
      )
  }

  export default Carousel;