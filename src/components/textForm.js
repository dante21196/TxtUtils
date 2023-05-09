import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let captext=text.toUpperCase();
        setText(captext);
        props.showAlert("Uppercase Conversion Successful","Success!")
    }
    const handleLowClick = ()=>{
        let captext=text.toLowerCase();
        setText(captext);
        props.showAlert("Lowercase Conversion Successful","Success!")
    }
    const handleClearClick = ()=>{
        setText('');
        props.showAlert("Text Cleared","Success!")
    }
    const changeTxt = (event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("Enter your text");
  
    return (
    
    <div> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className={`form-control text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'secondary'}`} value={text} onChange={changeTxt} rows="8"></textarea>
    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1 className="text-${props.mode==='light'?'dark':'light'}">Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview text</h2>
        <p>{text.length===0?'Enter some text to preview':text}</p>
    </div>
    </div>
  )
}
