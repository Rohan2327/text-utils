import React ,{useState}from 'react';


export default function TextForm(props) {
    const handleUpClick =()=>{
       
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick =()=>{
       
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick =()=>{
       
        let newText ='';
        setText(newText);
        props.showAlert("TextArea Cleared!","success");
    }
    const handleOnChange =(event)=>{
      
        setText(event.target.value);
    }
    const handleCopy = ()=>{

        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to clipboard!","success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed!","success" );
    }


    const[text,setText] = useState('');
    
    return (
        <>
        <div className="container" style={{color :props.mode==='dark' ? 'white':'#042743'}}>
<div className="mb-3">
    <h2 className="mb-4" >{props.heading}</h2>
  <textarea className="form-control" value={text} onChange={handleOnChange} style=
  {{backgroundColor :props.mode==='dark' ? '#13466e':'white',color :props.mode==='dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color :props.mode==='dark' ? 'white':'#042743'}}>
            <h2>Your text Summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <p> {text.split(".").length} Sentences </p>
            <p> {0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing  to preview "}</p>
        </div>
        </>
    )   
}
