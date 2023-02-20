



import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateBook(){
  const [title, setTitle] = useState('');
  const [excerpt,setExcerpt]=useState("")
  const [ISBN,setISBN]=useState("")
  const [releasedAt, setReleasedDate] = useState("");
const {bookId}=useParams()
const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let token = localStorage.getItem("token")
    let bookId = localStorage.getItem("bookId")
    console.log(bookId);
      await axios.put(`http://localhost:3001/books/${bookId}`, {
        title,
        excerpt,
        ISBN,
        releasedAt
      },{ headers: { "x-auth-key": token } }).then(()=>{navigate('/')});
    
      

  };

  return (
    <div>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="excerpt">
            <Form.Label>Excerpt</Form.Label>
            <Form.Control
              type="text"
              
              placeholder="Enter Excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="ISBN">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ISBN"
              value={ISBN}
              onChange={(e) => setISBN(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="releaseddate">
            <Form.Label>Released Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Released date"
              value={releasedAt}
              onChange={(e) => setReleasedDate(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
    
    </div>
  );
};

export default UpdateBook
