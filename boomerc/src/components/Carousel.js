import React, { useState } from 'react'
import './Carossel.css'


export default function Carousel() {
 
  return (
    <section id="Signup">
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }
      }>

        <div className="carousel-inner" id='carousel'>

          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2 se "  type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
                setSearch(e.target.value) 
                 
              }}></input>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </div>
          </div>

          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100 " alt="..."></img>

          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100 " alt="..."></img>

          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?chicken" className="d-block w-100 " alt="..."></img>

          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </section>
  )
}
