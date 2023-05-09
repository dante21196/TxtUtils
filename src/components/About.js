import React,{useState} from 'react'

export default function About() {

    
    const[btnTxt,setBtnTxt]=useState('Enable Dark Mode')
    const[myStyle,setMyStyle]=useState({color:"black",
    backgroundColor:"white"})  
    const toggleState= ()=>{
        if(myStyle.color==='white')
        {
        setMyStyle({
            color:"black",
            backgroundColor:"white",
            border:"1px solid white"
        })
        setBtnTxt('Enable Dark Mode')
    }
        
        else
        {
        setMyStyle({
            color:"white",
            backgroundColor:"black"
        })
        setBtnTxt('Enable Light Mode')
        
    }
}
  return (
    <div class="my-3" style={myStyle}>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About TxtUtils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is Text utility app.</strong>Text Utils app has been outfitted with functionalities to manipulate text in whatever form you may require. TxtUtils has been developed using ReactJS. This is my first ReactJS project.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Features
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TxtUtils offers features like</strong> Convert to uppercase, convert to lowercase, Clear Text, Enable dark and light themes.
      </div>
    </div>
  </div>
  
</div>
<div className="container">
    <button className="btn btn-primary my-3 mx-2" onClick={toggleState}>{btnTxt}</button>
</div>
    </div>
  )
}
