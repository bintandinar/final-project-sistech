import Navbar from "./Navbar";

const Register = () => {
  return ( 
    <>
      <Navbar />
        <div className="register-form">
          <form >
            <h3>Register</h3>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            {/* <div className="checkbox-container">
              <input type="checkbox" id="role1" name="role1" value="Admin" />
              <label className="checkbox" for="role1">Admin</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="role2" name="role2" value="User" />
              <label className="checkbox" for="role2">User</label>
            </div> */}
            <button className="button-login"type="submit">Register</button>
            <h3 className="text-under-btn">Already have an account? <a href="/Login">Login here</a></h3>
          </form>
        </div>
    </> 
  );
}
 
export default Register;