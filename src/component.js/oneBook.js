import { useParams } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

function BookPost() {
    const [books, SetBooks] = useState([])
    const { bookId } = useParams();
    
    let token = localStorage.getItem('token');
    let id=localStorage.getItem("bookId")
    console.log(id)

    // useEffect(() => {
        axios.get(`http://localhost:3001/books/${bookId}`, { headers: { "x-auth-key": token } }).then((responce) => { SetBooks(responce.data.data) })
            .catch((err) => alert(err.message))
    // }, [])





  return (
    <Card>
      <Card.Body>
        <Card.Title>{books.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{books.excerpt}</Card.Subtitle>
        {/* <Card.Text>{books.}</Card.Text> */}
      </Card.Body>
    </Card>
  );
}
export default BookPost
