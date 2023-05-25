import React from 'react'
import Mern1 from  '../Videofile/video/mern1.mp4'
import Mern2 from  '../Videofile/video/mern2.mp4'

export default function Mern() {
  return (
    <div>
     <div id="carouselExampleFade" className="carousel slide carousel-fade"  >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <video  className='hg' controls>
        <source src={Mern1}></source>
      </video>
    </div>
    <div className="carousel-item">
    <video className='hg' controls >
        <source src={Mern2}></source>
      </video>
      
    </div>
    <div className="carousel-item" >
    <video className='hg'  controls>
        <source src={Mern1}></source>
      </video>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}
