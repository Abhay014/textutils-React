
import './App.css';
import NavBar from './components/NavBar';
import TestForm from './components/TestForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';


// import {
//   BrowserRouter,
//   Routes,
//   Route,

// } from "react-router-dom"; 

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('dark mode have been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode have been enabled', 'success')
    }

  };


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (

    <div className="App">
      
      {/* <BrowserRouter> */}
      <NavBar title='textutils1' about='about'  mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      <TestForm heading='Ener the text to analyze' mode={mode} showAlert={ showAlert} />
{/*      
    <Routes>
        <Route path="/Home" element={<TestForm heading='Ener the text to analyze' mode={mode} showAlert={ showAlert} />} />
        <Route path="/About" element={<About />} />
      
    </Routes> */}
  {/* </BrowserRouter> */}
        
      
    </div>
   
  );
}

export default App;
