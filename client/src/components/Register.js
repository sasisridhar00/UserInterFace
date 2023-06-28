const Register = () =>{
    return(
        <div>
         <form className = "register-form">

        <div className="mb-3">
          <label For="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            required
          />
          </div>
          <div className="mb-3">
          <label For="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email"
            name='email'
            required
          />
          </div>
       
        <div className="mb-3">
          <label For="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            required
          />
        </div>

        <div className="mb-3">
          <label For="password2" className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password2"
            name='password2'
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
        </form>
        </div>
    );
}
export default Register;