import React from 'react'
import './Main.css'
import WE from '../Main/home.jpg'
import WE1 from '../Main/tv1.mp4'



// import WE from '../coursespla/home.jpg'
// import WE1 from ''


const Main = () => {
  return (
  <>
    <section id="o">
    <br/>
    <br/>
    <br/>
    

    
      
    <div> <h1 id='hee'> Courses for Placement</h1></div>
    <div className='paren'>
    
    <div className='child'>
      <div id="sf">
        <div id="dd">
        <video src={WE1} className="r"  controls="controls" autoPlay="true" />
        </div>
        
         
       
      </div>
    </div>
   
    <div className='child' >
    <img src={WE} className="animated" id="x"/>
    <h1 id="p" className='animated'>Login and Explore</h1>
    </div> 
   

    </div>
    
      
    </section>
    
    
    </>
    
  )
}

export default Main
