import React,{useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';
{/*import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
*/}


function App() {
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
    type:type})
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor= '#0A1D71';
    document.body.style.color= "white";
    showAlert("Dark Mode has been enabled!","Success!")
    }
    else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    document.body.style.color= "black";
    showAlert("Light mode has been enabled!","Success!")
  }
}
    const colorMode=(key)=>{
    document.body.style.color="white";
    setMode(key);
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
     document.body.classList.add(`bg-${key}`);
    showAlert(`${key} Mode has been enabled`,'Success!')
    }

  return (
    <>
    {/* <Router> */}
   <Navbar title="TxtUtils" mode={mode} showAlert={showAlert} about="About TxtUtils" colorMode={colorMode}/>
   <Alert alert={alert}/>
   <div className="container">
   {/*<Routes>
   {/* <Route exact path="/" element=*/}{<TextForm showAlert={showAlert} heading="Example TxtForm" mode={mode} />}{/*/>
   
   <Route exact path="/about" element={<About/>}/>
    
   </Routes> */}
   
   </div>
   {/* </Router>  */}

    </>
  );

}

export default App;
