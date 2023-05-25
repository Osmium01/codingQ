import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });//geolocation for hit through api thats why


const navigate=useNavigate();






  const handleSubmit = async (e) => {
    e.preventDefault();//sinthetic event hota h
    // const {name,email,password,location} = user
    console.log(JSON.stringify(
      {
        
        email: credentials.email,
        password: credentials.password,
        
      }))
    // const {name,password,email,location}=credentials;

    const response = await fetch("/loginuser", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(
        {
           email: credentials.email,
          password: credentials.password
        }
      )


    });
    const data = await response.json()
    if (!data.success) {
      window.alert("invalid enteries")
      console.log("invalid entry")
    }
    if(data.success){
      // localStorage.setItem("authToken",data.authToken);
      // console.log(localStorage.getItem("authToken"));
      alert("successfully register");
      localStorage.setItem("authToken",data.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate('/')      
      console.log("succefully register");
    }
 


  }
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })

} 
 


  return ( 
    <section id="login">
    
    <div className='container1'>
    <div className='name'><div className='name1'>
    <h1 className='head'>CodingQ</h1><h1>our motive to teach<br></br> Student for Placement</h1>
    
    </div> 
    </div>
    <div id="contbig">
    <div id="container">
    <div id='circle'></div>
      <form method='POST' onSubmit={handleSubmit}>

        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control form-control1" id="exampleInputEmail1" name='email' value={credentials.email} onChange={onchange} required></input>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control form-control1"  name='password' value={credentials.password} id="exampleInputPassword1" onChange={onchange} required></input>
        </div>

        <button type="submit" className="btn btn-success btn1" >Submit</button>
        <Link to="/createuser" className='m-4  mt-5 btn btn-danger btn1' >I'm New user</Link>
      </form>
      </div>
      </div>
      </div>
    </section>
  )
}
