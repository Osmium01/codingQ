import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import Modal from '../Modal';
import { useCart } from './ContextRuducer';
import Cart from '../screen/Cart';
import Modal from '../Modal';



export default function Navbas(props) {

const [cartView,setCartView]=useState(false);
localStorage.setItem('temp', "first")

  const navigate=useNavigate();


  const handlelogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/");

  }
  const loadCart = () => {
    setCartView(true)
}

const items = useCart();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="nav2">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">CodingQ</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {
                (localStorage.getItem("authToken")) ? <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/cart">MyCourses</Link>
                </li> : ""
              }


            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>

                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>

                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                
              </div> :
              <div>
                <div className='btn bg-white text-success mx-2' onClick={loadCart}>My cart{""}
                         
                </div>
                {cartView ? <Modal onClose={()=> setCartView(false)}><Cart></Cart></Modal>:" "}
                <div className='btn bg-white text-danger mx-2' onClick={handlelogout} >Log Out</div>
              </div>}

          </div>
        </div>
      </nav>
    </div>
  )
}
