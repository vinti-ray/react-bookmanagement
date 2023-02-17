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

    const res=  await axios.post("http://localhost:3009/login",data).catch(e=>alert(e))

    localStorage.setItem('token',res.data.data );
    // console.log(localStorage.getItem('token'));
}



   return (
    <div>
        <input onChange={(e)=>{
            setemail(e.target.value)
        }}/>
        <input onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <button onClick={onSubmit} >submit</button>

     
    </div>
   )
  
}
export default User