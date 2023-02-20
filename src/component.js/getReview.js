// import { useState, useEffect } from 'react';
// import axios from 'axios';
// // import Review from './Review';

// const BookReviews = ({ bookId }) => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/books/${bookId}/reviews`);
//         setReviews(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchReviews();
//   }, [bookId]);

//   return (
//     <div>
//       <h2>Reviews:</h2>
//       {reviews.map((review) => (
//         <Review key={review.id} review={review} />
//       ))}
//     </div>
//   );
// };

// export default BookReviews;



