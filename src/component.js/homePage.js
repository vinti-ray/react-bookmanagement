import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import axios from 'axios';
// import { Card } from 'react-bootstrap';

function HomePage() {
    const [books, SetBooks] = useState([])
    const { bookId } = useParams();
    let token = localStorage.getItem('token');
    console.log(bookId)
    const navigate = useNavigate();
    useEffect(() => {
   if(!token){
       alert("please login first")
        navigate('/login');
   }

        if(bookId){
            axios.get(`http://localhost:3001/books/${bookId}`, { headers: { "x-auth-key": token } }).then((responce) => { SetBooks(responce.data.data) })
        


        }else{
            axios.get("http://localhost:3001/books", { headers: { "x-auth-key": token } }).then((responce) => { SetBooks(responce.data.data) })
         
        }

    }, [])




    if(bookId){
        const deleteApi=(e)=>{
            e.preventDefault()
               axios.delete(`http://localhost:3001/books/${bookId}`,{ headers: { "x-auth-key": token } }).then(()=>{navigate('/')}).catch((a)=>alert(a.message))
        }
        
        
        return (
            <Card>
              <Card.Img  variant="bottom" src="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg" />
                      <Card.Body>
                        <Card.Title>{books.title}</Card.Title>
                        <Card.Text>
                          {books.reviews}
                        </Card.Text>
                        <Button variant="primary" href='/updatebook' >update Book</Button>
                        <Button variant="primary" onClick={deleteApi} >delete Book</Button>
                        <Button variant="primary" href="/givereview">review this page</Button>
                        <Button variant="primary" href="/showreview">show review</Button>
                        </Card.Body>
                   
            </Card>
          );
    }else{
        return (
            <Container>
              <Row className="my-4">
                <Col>
                  <h1>My Blog</h1>
                </Col>
              </Row>
              <Row className="my-4">
        
        
                {books.map(book => (
                  <Col md={4} key={book._id}>
                    <Card>
                      <Card.Img variant="top" src="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg" />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                          {book.reviews}
                        </Card.Text>
                        <Button variant="primary" href={book._id}>Read More</Button>
                    
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Button variant='secondary' href='/createblog'>Create Your Own Blog</Button>
            </Container>
        
          )
    }


}

export default HomePage;
