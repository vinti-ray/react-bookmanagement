import axios from "axios"
import React, {useState,useEffect} from "react"
import "./registration.css"

function Registration(){

    const [firstName,setFirstName]=useState("")
   const [title,settitle]=useState("")
   const [phone,setPhone]=useState("")
   const [email,setEmail]=useState("") 
   const [Password,setPassword]=useState("")
    const  fName=((e)=>{
            setFirstName(e.target.value)
        })

     const onSubmit=async(e)=>{
       e.preventDefault()
       if(firstName&&title&&phone&&email&&Password){
        const data={
            title:title,
            name:firstName,
            email:email,
            phone:phone,
            password:Password
        }
       const submit=await axios.post("http://localhost:3009/register",data)
       console.log(submit);
       }else{
        alert("please fill all required field")
       }

     }

    return (<div className="complete">
                <label>Title:  <input className="title" type="text" value={title} onChange={(e)=>{settitle(e.target.value)}}/></label>
                <br/>
                <label>Name:   <input  className="title" type="text" value={firstName} onChange={(e)=>{fName(e)}}/> </label>
                <br/>
                <label> Phone: <input className="title" type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/></label>
                <br/>
                <label>Email:  <input className="title" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></label>
                <br/>
                <label> Password:  <input className="title" type="text" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/></label>
                <br/>
                <button className="button" onClick={onSubmit}>Submit</button>

    </div>)
}
export default Registration



// const formData = new FormData();
//     formData.append('file', bookCover);
//     formData.append('fileName', bookCover.name);
//     const config = {
//       headers: {
//         'content-type': 'multipart/form-data',
//         "Authorization": token
//       },
//     };