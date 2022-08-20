import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Login() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  
  async function login() {
    console.log(email, password);
    let item={email, password};
    let result= fetch('https://avatar.ristek.cs.ui.ac.id/auth/login', {
      method: "POST",
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem('user-info',JSON.stringify(result))
  }

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-form">
          <form className="login-form">
            <h3>Login</h3>
            <div className="form-group">
              <div className="form-floating">
                <label htmlFor="floatingInput">Username</label>
                <input
                  className="form-control"
                  name="name"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter Username"
                  type="text"
                />
              </div>
              <div className="form-floating">
                <label htmlFor="floatingInput">Password</label>
                <input
                  className="form-control"
                  name="token"
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
            </div>
            <div className="btn-group">
              <button onClick={login} className="login-btn">Login</button>
              <h3 className="text-under-btn">Don't have an account? <a href="/Register">Register here</a></h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
