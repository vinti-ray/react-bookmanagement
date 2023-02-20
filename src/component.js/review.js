import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [reviewedBy, setreviewedBy] = useState('');
  const [review, setReview] = useState('');
  const [bookId, setBookId] = useState(false);
  const [reviewedAt, setReviewdAt] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    let bookId = localStorage.getItem("bookId")
     setBookId(bookId)

      axios.post(`http://localhost:3001/books/${bookId}/review`, {
        rating,
        reviewedBy,
        review,
        bookId,
        reviewedAt
      }).then(()=>{navigate('/showreview')})
  };

  return (
    <Container>
      <h1>Leave a review</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          >
            <option value={0}>Select rating</option>
            <option value={1}>1 star</option>
            <option value={2}>2 stars</option>
            <option value={3}>3 stars</option>
            <option value={4}>4 stars</option>
            <option value={5}>5 stars</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="reviewed By">
          <Form.Label>Reviewed by</Form.Label>
          <Form.Control
            type="text"
            value={reviewedBy}
            onChange={(event) => setreviewedBy(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="review">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={review}
            onChange={(event) => setReview(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="reviewedAt">
          <Form.Label>Reviewed At</Form.Label>
          <Form.Control
            type="text"
            value={reviewedAt}
       
            onChange={(event) => setReviewdAt(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default ReviewPage