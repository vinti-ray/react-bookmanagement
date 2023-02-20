import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
function CreateBookPost() {
  const [title, setTitle] = useState('');
  const [excerpt,setExcerpt]=useState("")
  const [authorId,setAuthorId] = useState("");
  const [ISBN,setISBN]=useState("")
  const [category,setcategory]=useState("")
  const [subcategory,setSubcategory]=useState("")

  const navigate = useNavigate();
  useEffect(() => {
    // check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);

 
  const handleSubmit = async(event) => {
    event.preventDefault();
    let token = localStorage.getItem("token")
    const decodedToken = jwt_decode(token);
    console.log(decodedToken);
        setAuthorId(decodedToken.userId)
        let data={
            title:title,
            excerpt:excerpt,
            ISBN:ISBN,
            userId:authorId,
            category:category,
            subcategory:subcategory
        }
       const ab=await axios.post("http://localhost:3001/books",data, { headers: { "x-auth-key": token } }).then((responce)=>{  localStorage.setItem("bookId",responce.data.data._id);navigate('/')})
      

  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Create a New Blog Post</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">

              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} />

              <Form.Label>Excerpt</Form.Label>
              <Form.Control type="text" value={excerpt} onChange={(event) => setExcerpt(event.target.value)} />

              <Form.Label>ISBN</Form.Label>
              <Form.Control type="text" value={ISBN} onChange={(event) => setISBN(event.target.value)} />


              <Form.Label>Category</Form.Label>
              <Form.Control type="text" value={category} onChange={(event) => setcategory(event.target.value)} />

              <Form.Label>Subcategory</Form.Label>
              <Form.Control type="text" value={subcategory} onChange={(event) => setSubcategory(event.target.value)} />


            </Form.Group>

            {/* <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={10} value={content} onChange={(event) => setContent(event.target.value)} />
            </Form.Group> */}

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateBookPost;