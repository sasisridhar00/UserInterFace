import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/userContext';
//import About from './components/pages/About.js';
import Login from './components/pages/Login.js';
import Register from './components/pages/Register.js';
import Profile from './components/pages/Profile.js';
import Navbar from './components/pages/Nav.js';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<Profile />}/>
          </Route>
        </Routes> 
      </BrowserRouter>  
      </UserProvider>   
    </div>
  );
}
export default App;

