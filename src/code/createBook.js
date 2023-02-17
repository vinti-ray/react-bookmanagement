import axios from "axios"
import React, {useState,useEffect} from "react"

function CreateBook(){
  const [title,settitle]=useState("")
//   const [bookCover,setBookCover]=useState("")
  const [excerpt,setExcerpt]=useState("")
  const [ISBN,setISBN]=useState("")
  const [category,setcategory]=useState("")
  const [subcategory,setSubcategory]=useState("")
 
const  onSubmit=async (e)=>{
    e.preventDefault()
    if(title&&excerpt&&ISBN&&category&&subcategory){
     const data={
        title:title,
        excerpt:excerpt,
        ISBN:ISBN,
        // bookCover:bookCover,
        category:category,
        subcategory:subcategory
     }   
     const submit=await axios.post("http://localhost:3009/books",data)
     console.log(submit);
     }else{
      alert("please fill all required field")
     }
  }
       

  return (<div>
          Title:<input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} />
          <br/>
          {/* Book Cover:  <div>
            <img className="preview" src={previewImage} alt="" />
          </div> */}

          Excerpt:<input type="text" value={excerpt} onChange={(e)=>{setExcerpt(e.target.value)}} />
          <br/>
          ISBN:<input type="text" value={ISBN} onChange={(e)=>{setISBN(e.target.value)}} />
          <br/>
          Category:<input type="text" value={category} onChange={(e)=>{setcategory(e.target.value)}} />
          <br/>
          subcategory:<input type="text" value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}} />

          <button onClick={onSubmit}>Submit</button>
  </div>)

}
export default CreateBook