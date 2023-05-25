import React, { useState } from 'react'
import R from './java.jpg';
import G from './Mern.png';
import J from './c++.png';
import W from './dsa.png';
import '../courses/courses.css'
import video from '../courses/bvdo.mp4'
import Navbas from '../../components/Navbas';
import Modal from '../../Modal';
import Cart from '../Cart';
import Cpp from '../Videofile/Cpp';
import Java from '../Videofile/Java';
import Dsa from '../Videofile/Dsa';
import Mern from '../Videofile/Mern';
import Footer from '../../components/Footer';

const Courses1 = () => {
 const [cartView,setCartView]=useState(false);
 const [java,setJava]=useState(false);
 const [mern,setMern]=useState(false);
 const [dsa,setDsa]=useState(false);
 
 const ojava=()=>{
  setJava(true);

 }
 const omern=()=>{
  setMern(true);
 }
 
 const onplay=()=>{
  setCartView(true);
 }

 const odsa=()=>{
  setDsa(true);
 }


  return (
    <section id='m'>
    <Navbas></Navbas>
    <section >
    <div  className="m2 " >
      <video src={video} autoPlay="true" muted="true" loop="true" width={"100%"} >   
      </video>
    </div>
    </section>
    <div id='body'>
      <h2 data-text="EXPLORE">EXPLORE</h2>
    </div>
    <div className='par'>
    

    <div className='place1'>
        <div className='pla'>
            <div className='pla1'>
            <img src={J} className='J'></img>
            </div>

            <div >
            <button className='btn2' onClick={onplay}>Learn it</button>
            {cartView?<Modal onClose={()=> setCartView(false)}><Cpp></Cpp></Modal>:" "}
            <p>C++ Programming Fundamentals</p>
            </div>
        </div>

        <div className='pla'>
        <div className='pla1'>
        <img src={G} className='J'></img>
        </div>
        <div>
        <button className='btn2 '  onClick={omern}>Learn it</button>
       {mern?<Modal onClose={()=> setMern(false)}><Mern></Mern></Modal>:" "}
        <p> MongoDB, Express, React, Node, after the four key technologies that make up the stack</p><br/>
        </div>
       
        </div>

        <div className='pla'>
        <div className='pla1'>
        <img src={R} className='J'></img>
        </div>
        <div><button className='btn2 '  onClick={ojava}>Learn it</button>
       {java?<Modal onClose={()=> setJava(false)}><Java></Java></Modal>:" "}
        <p>Java Programming<br/> Fundamentals</p></div>
        
        </div>

        <div className='pla'>
        <div className='pla1 '>
            <img src={W} className='J'></img>
        </div>
        <div><button className='btn2 '  onClick={ojava}>Learn it</button>
       {dsa?<Modal onClose={()=> setJava(false)}><Dsa></Dsa></Modal>:" "}
        <p>DSA<br/> Data Structure and algorithm</p></div>
        
        
        
        </div>

    </div>

    </div>
    <Footer></Footer>
    

    </section> 
  )
}

export default Courses1
