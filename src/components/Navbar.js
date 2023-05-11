


import React, { useState } from 'react'
import PropTypes from 'prop-types'

// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  const [navMode,setNavmode]=useState('light')
  const[btnTxt,setBtnTxt]=useState('Enable Dark Mode')
  
    const toggleState= ()=>{
      
        if(navMode==='light')
        {
        setNavmode('dark')
        setBtnTxt('Enable Light Mode')
    }
        
        else
        {
        setNavmode('light')
        setBtnTxt('Enable Dark Mode')
        
    }
}
  return (
     
      
    <nav className={`navbar navbar-expand-lg navbar-${navMode} bg-${navMode==='dark'?'dark':'light'}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.about}</a>
          </li>
         

          
        </ul>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>*/}
        <div className="bg-primary rounded mx-2 my-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.colorMode('primary')}}>  </div>
        <div className="bg-secondary rounded mx-2 my-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.colorMode('secondary')}}>  </div>
        <div className="bg-success rounded mx-2 my-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.colorMode('success')}}>  </div>
        <div className="bg-danger rounded mx-2 my-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.colorMode('danger')}}>  </div>
        <div className="bg-warning rounded mx-2 my-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.colorMode('warning')}}>  </div>
        <div className="bg-info rounded mx-2 my-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.colorMode('info')}}>  </div>
        
<div>
  
  <button className="btn btn-primary btn-sm my-3 mx-2" onClick={toggleState}>{btnTxt}</button>
</div>
      </div>
    </div>
  </nav>  
  )
}


Navbar.pstartropTypes={
    title:PropTypes.string.isRequired,
    home:PropTypes.string,
    about:PropTypes.string
};

Navbar.defaultProps={
    title:"TEXT UTILITIES",
    home:"Home",
    about:"About Us"

};