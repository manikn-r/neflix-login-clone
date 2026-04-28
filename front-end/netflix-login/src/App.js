
import { useState } from 'react';
import './App.css';
import logo from "./assets/logo3.png";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function App() {
  const [name, setName] = useState("")
  const [password, setPas] = useState("")
  const navigate = useNavigate();
  function login() {
    let payload = {
      uName: name,
      password: password
    }
    if (name.trim() === "" || password.trim() === "") {
      return window.alert("Enter valid username and password !")
    }
    let url = axios.post("https://neflix-login-clone.onrender.com/login", payload)
    url.then((res) => {
      console.log(res);
      if (res.data)
        navigate("/dashboard")
      else
        window.alert("Invalid User Credentials. Please Try Again !");

    }).catch((e) => {
      window.alert("fail")
    })
  }
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>
        <div className="sign"><button>Sign In</button></div>
      </div>
      <div className="content">
        <h1>Unlimited movies, shows, and more</h1>
      </div>
      <div className="form">
        <input required placeholder='username' value={name} onChange={(e) => { setName(e.target.value) }}></input>
        <input required placeholder='password' value={password} onChange={(e) => { setPas(e.target.value) }}></input>
        <button onClick={login}>Get Started</button>
      </div>
    </div>
  );
}

export default App;
