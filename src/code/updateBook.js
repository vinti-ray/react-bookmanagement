import axios from "axios"
import React, {useState,useEffect} from "react"

function UpdateBook(){
  const [title,settitle]=useState("")
//   const [bookCover,setBookCover]=useState("")
  const [excerpt,setExcerpt]=useState("")
  const [ISBN,setISBN]=useState("")


  const GetData=async(e)=>{
    e.preventDefault()
   await axios.get("http://localhost:3009/books").then((res)=>{console.log(res.data.data);})
  }


const  onSubmit=async (e)=>{
    e.preventDefault()

     const data={
        title:title,
        excerpt:excerpt,
        ISBN:ISBN,

     }   
     const submit=await axios.post("http://localhost:3009/books",data)
     console.log(submit);

  }
       

  return (<div>
          
          <button onClick={GetData}>Update Book</button>
         <br/>
          Title:<input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} />
          <br/>
          {/* Book Cover:  <div>
            <img className="preview" src={previewImage} alt="" />
          </div> */}

          Excerpt:<input type="text" value={excerpt} onChange={(e)=>{setExcerpt(e.target.value)}} />
          <br/>
          ISBN:<input type="text" value={ISBN} onChange={(e)=>{setISBN(e.target.value)}} />
          <br/>


          <button onClick={onSubmit}>Submit</button>
  </div>)

}
export default UpdateBook