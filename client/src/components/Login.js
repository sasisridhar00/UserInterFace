import { fetchData } from "../../main.js";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{

     const navigate = useNavigate();

    //const {user, updateUser} = useContext(UserContext);
    const [user, setUser] = useState({
      username: "",
     
      password: "",
     
     
    })
    const {username, password} = user;  
  
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})
  
    const onSubmit = (e) => {
      e.preventDefault();
    // console.log(user)
      fetchData("user/login", 
        {
         username,
     
         password
        }, 
       "POST" )
      
      .then((data) => {
        if(!data.message) {
            console.log(user)
         navigate("/ About")
        }
  })
    .catch((error) => {
      console.log(error)
    })
  
  }

    return(
        <div className="login">
        
        <h1 className="text-center">Hello Again!</h1>
        
        <form className="needs-validation" onSubmit={onSubmit}>
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
          <div className="invalid-feedback">
          Please enter your username!
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
                <div className="invalid-feedback">
                    Please enter your password
                </div>
            </div>
            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" for="check">Remember me</label>
            </div>
            <input className="btn btn-success w-100" type="submit" value="SIGN IN" />
        </form>
      
        </div>
    );
}
export default Login;
