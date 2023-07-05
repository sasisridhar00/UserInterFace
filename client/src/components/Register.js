import { fetchData } from "../../main.js";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
//import {UserContext} from "../components/context/userContext.js";


const Register = () =>{
  const navigate = useNavigate();

  //const {user, updateUser} = useContext(UserContext);
  const [user, setUser] = useState({
    username: "",
    email:"",
    password: "",
    password2: "",
   
  })
  const {username, email, password, password2} = user;  

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();
   console.log(user)
    fetchData("/user/register", 
      {
       username,
       email,
       password
      }, 
     "POST" )
    
    .then((data) => {
      if(!data.message) {
       navigate("/ About")
      }
})
  .catch((error) => {
    console.log(error)
  })

}
    return(
        <div>
         <form className = "register-form" onSubmit={onSubmit}>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            onChange={onChange}
            value={username}
            required
          />
          </div>
      
          <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email"
            name='email'
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password2" className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password2"
            name='password2'
            onChange={onChange}
            value={password2}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
        </form>
        </div>
    );
}
export default Register;
