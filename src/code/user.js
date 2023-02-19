import axios from "axios"
import { useState,useEffect } from "react"
import "./user.css"
import { Navigate,useNavigate  } from "react-router-dom";

function User(){
    const [email,setemail]=useState("")
    
    const [password,setPassword]=useState("")

const onSubmit=async(e)=>{
        e.preventDefault()
        const data={
            email:email,
            password:password
        }

    const res=  await axios.post("http://localhost:3009/login",data) .then((responce) => {
        localStorage.setItem("token", responce.data.data.token)
        localStorage.setItem("userId", responce.data.data.userId)
        alert("Login successfull")
    }).catch((err) => alert(err.message))

    localStorage.setItem('token',res.data.data );
    // console.log(localStorage.getItem('token'));
}



   return (
    <div id= "bigBox1">
                 <div className="headingLogin">
                    <h2 id="login">LOGIN</h2>
                </div>

<div className="loginBox">
      <label>Email  <input onChange={(e)=>{
            setemail(e.target.value)
        }}/></label>
      <label >Password  <input onChange={(e)=>{
            setPassword(e.target.value)
        }}/></label>
        <button id="btn1" onClick={onSubmit} >submit</button>
        </div>
     
    </div>
   )
  
}
export default User