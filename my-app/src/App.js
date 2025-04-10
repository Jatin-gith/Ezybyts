
import './App.css';
import Navbar from './Component/Navbar';
import Form from './Component/Form';
//import About from './Component/About';
import React, { useState } from "react";
import Alert from './Component/Alert';




 function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState('null');
  const showalert = (messege,type)=> {

    setAlert({
      msg: messege,
      type: type,
    })
    setTimeout(() => {
      setAlert('null');
    },1500);

  }
  
  const togglemode = ()=> {
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743'
      showalert(" Dark mode has been Enable ", "Succes:")
    }
    else{
      setmode('light');
       document.body.style.backgroundColor='white'
       showalert(" Light mode has been Enable ", "Succes:")
    }
  }
  return (
   <>  
   
    <Navbar tittle="TextConvertor"  About="About"  mode={mode} togglemode={togglemode}/> 
    <Alert alert={alert}/>
   <div className="container my-3">
   
           
         { // <About  mode={mode}/>//
            }
        
          <Form heading="Enter the Text Here" showalert={showalert}  mode={mode}/>
          
           
          
           </div>
           
         
      
   </>
  );
}

export default App;
