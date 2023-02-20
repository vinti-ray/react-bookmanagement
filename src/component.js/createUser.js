import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title,settitle]=useState("")
  const [phone,setPhone]=useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [pincode, setPincode] = useState("")

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

        const data={
            title:title,
            name:name,
            email:email,
            phone:phone,
            password:password,
            street:street,
            city:city,
            pincode:pincode
        }
    axios.post("http://localhost:3001/register",data).then(()=>{navigate('/login')}).catch((e)=>{alert(e.message)})

  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Register a New User</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>

          <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" value={title} onChange={(event) => settitle(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="street">
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" value={street} onChange={(event) => setStreet(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" value={city} onChange={(event) => setCity(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" value={pincode} onChange={(event) => setPincode(event.target.value)} />
            </Form.Group>




            <Button variant="primary" type="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterUser;