import axios from "axios"
import React, {useState,useEffect} from "react"

function FetchApi(){
  const [list,setList]=useState()

    const FetchApi=()=>{
      if(!list){
  
     axios.get("http://localhost:3009/books").then((response)=>{setList(response.data)})
     
    }
  }


return(
    <div>
        <h1>List {FetchApi()}</h1>
        

        {list && list.length>0 &&(
         <ol>
           {list.map(a=>{

                return <li key={a.title}>{a.title}
                </li>
           })}

         </ol>
        )}

    </div>
)
}
export default FetchApi