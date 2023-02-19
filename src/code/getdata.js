import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./getData.css"




function BookList() {
    const [books, SetBooks] = useState([])
    
    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get("http://localhost:3009/books", { headers: { "x-api-key": token } }).then((responce) => { SetBooks(responce.data.data) })
            .catch((err) => alert(err.message))
    }, [])


    return (
        <div id='bookListBigBox'>
            <>
    
                <div id="allList">
                    {books.map((x, i) => {
                        return (<div className="itemBox" key={i}>

                            <img id='books' src={(x.bookCover) ? `${x.bookCover}` : "https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"} alt='error' />
                            <span>{x.title}</span>
                            <span>User : {x.userId}</span>
                            <span>Reviews : {x.reviews}</span>
                            
                            <a href={`/homepage/${x._id}`}><button id='btn1' className="btn btn-primary" >More Details</button></a>
                        </div>)
                    })}
                </div>
            </>

        </div>
    )
}

export default BookList
