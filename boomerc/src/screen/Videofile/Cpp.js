import React from 'react'

import cpp from '../Videofile/video/cpp.mp4'
import cpp1 from '../Videofile/video/cpp1.mp4'
import cpp2 from '../Videofile/video/cpp2.mp4'



export default function Cpp() {
    
  return (
    <div>
    
    <div id="carouselExampleFade" className="carousel slide carousel-fade"  >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <video  className='hg' controls>
        <source src={cpp2}></source>
      </video>
    </div>
    <div className="carousel-item">
    <video className='hg' controls >
        <source src={cpp1}></source>
      </video>
      
    </div>
    <div className="carousel-item" >
    <video className='hg'  controls>
        <source src={cpp}></source>
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
