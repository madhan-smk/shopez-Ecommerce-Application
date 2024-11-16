import React, { useState } from 'react';
import './loginsignup.css';

const Loginsignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login function ", formData);
    let responseData;
    await fetch('http://localhost:10000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>{responseData=data})
if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/");

}
else{
  alert(responseData.errors)
}
    
    
  
  }

  const signup = async () => {
    console.log("signup function ", formData);
    let responseData;
    await fetch('http://localhost:10000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>{responseData=data})
if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/");

}
else{
  alert(responseData.errors)
}
    
    
  }

  return (
    <div className="loginsignup">
      <div className="container">
        <h1>{state}</h1>
        <div className='loginsignupfields'>
          {state === "Sign Up" ? <input type="text" name="username" placeholder="Username" value={formData.username} onChange={changeHandle} /> : null}
          <input type='email' name="email" placeholder='Email address' value={formData.email} onChange={changeHandle} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={changeHandle} />
        </div>
        <button className="submit"  onClick={() => { state === "Login" ? login() : signup() }}>Submit</button>
        {state === "Sign Up" ?
          <p className='signup'> Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>
          : <p className='signup'>Create an account? <span onClick={() => { setState("Sign Up") }}>Sign up here</span></p>}
      </div>
    </div>
  );
}

export default Loginsignup;
