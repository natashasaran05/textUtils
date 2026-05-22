import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase","success");
  }

   const handleLoClick=()=>{
    let newText= text.toLowerCase();
    setText(newText);
   props.showAlert(" Converted to lowercase","success");
  }

  
 const handleClearClick=()=>{
    let newText= "";
    setText(newText);
    props.showAlert(" Text is cleared","success");
  }


  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to clipboard!","success");
  }

  const handleExtraSpaces = () => {
  let newText = text.split(/\s+/);
  setText(newText.join(" ").trim());
  props.showAlert(" Extraspaces are removed","success");
}


  const[text,setText]=useState("")
  return (
    <>
    <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1 >{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" style={{backgroundColor : props.mode === 'light' ? 'white' : '#1b2d49',color : props.mode === 'light' ? 'black' : 'white' }}value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy text</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>remove extra spaces</button>
      
    </div> 
    <div className="container my-3" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"nothing to preview!"}</p>
    </div>
    </>
  )
}