import React,{useState} from 'react'

export default function Form(props) {

  const handdleUpclick =()=>{
   // console.log("Upper case was clicked"+ text);
    let newtext=text.toUpperCase();
    settext(newtext)
    props.showalert(" Converted to Upper case ", "Succes:");
  }
  const handdleLoclick =()=>{
    // console.log("Lower case was clicked"+ text);
     let newtext=text.toLocaleLowerCase();
     settext(newtext)
     props.showalert(" Converted to Lower case ", "Succes:");
 

   }
   const handdleExtraspace =()=>{
    
     let newtext=text.split(/[ ]+/);
     settext(newtext.join(" "))
     props.showalert(" Remove Extra Spaces", "Succes:");
 

   }
   const handdleCopy =()=>{
    
    var text = document.getElementById("Textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert(" Copy Sentence", "Succes:");
}
    const handdleClclick =()=>{
  let newtext='';
  settext(newtext)
  props.showalert(" Clear Sentence", "Succes:");
    }

  const handdleOnchange =(event)=>{
      //console.log("On change");
    settext(event.target.value);

  }
  const [text, settext] = useState('');
 
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>

    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handdleOnchange} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='dark'?'white':'#042743'}} id="Textbox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handdleUpclick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handdleLoclick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handdleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handdleExtraspace}>Remove Extra Space</button>
<button className="btn btn-primary mx-1" onClick={handdleClclick}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summry</h2>
    <p>{text.split(" ").length} Words And {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length}min Read Time</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
    </>
  )
}
