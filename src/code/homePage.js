import axios from "axios"
import React, {useState,useEffect} from "react"
import { Navigate,useNavigate  } from "react-router-dom";
import "./homepage.css"
import Navbar from "./navbar";

function HomePage(){
    const [list,setList]=useState()
    const [authenticated, setauthenticated] = useState(null);

    const FetchApi=()=>{
      if(!list){


  axios.get("http://localhost:3009/books").then((response)=>{console.log(response.data.data);setList(response.data.data)})

    }

  }




return(

    <div id="card">
        <Navbar/>

        
   {list && list.length>0 &&(
         <>
           {list.map(a=>{

                return (<div className="data" >
                       <img className="image" src="https://images-eu.ssl-images-amazon.com/images/I/51Zu0ZwT0jL._AC_SX184_.jpg" ></img>
                        <p key={a.title} className="finaldata">{(a.category)},{a.title},{a.reviews}
                </p>
                
                </div>
                ) 
           })}

         </>
        )}
        <h1>{FetchApi()}</h1>


    </div>
)
 }


 export default HomePage

