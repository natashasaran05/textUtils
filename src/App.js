
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
const [mode,setMode]= useState('light');
const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type

})
setTimeout(() => {
  setAlert(null);
},2000);
}

const toggleMode = () =>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#313b4a';
    showAlert("Dark mode is enabled","success");
  }
  else{
    setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode is enabled","success");
  }
}
  


  return (
    <>
 {/*<Router>*/}
<Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert= {alert}/>

{/*<Routes>
  <Route path="/" element={*/}
  <div 
className="container my-3" ><TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
</div>  
{/*} />
  <Route path="/about" element={<About mode={mode}/>} />
</Routes>
</Router>*/}

</>
  
  );

}
export default App;
