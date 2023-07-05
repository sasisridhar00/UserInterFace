import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Profile from './components/pages/Profile.js';
import About from './components/pages/About.js';
import Register from './components/pages/Register.js';
import Navbar from './components/pages/Navbar.js';
import Login from './components/pages/Login.js';
//import { UserProvider } from './context/userContext';


function App() {
  return (
  <div className="App">
    
        <BrowserRouter>
          <Routes>
              <Route  element={ <Navbar />}>
              <Route index element={ <Login />}/>
            
              <Route index element={<About />}/>
              <Route path="register" element={<Register />}/>
            
           
            </Route>
          </Routes>
        </BrowserRouter>
     

    </div>
      
     

  
  
  );
}

export default App;
