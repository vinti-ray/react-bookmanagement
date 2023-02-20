import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



import Header from './component.js/nav';
import Login from './component.js/loginuser';
import HomePage from './component.js/homePage';
import RegisterUser from './component.js/createUser';
import CreateBookPost from './component.js/createBook';
import BookPost from './component.js/oneBook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Header/>
<Routes>

<Route path="/" element={<HomePage/>}>
<Route path='/:bookId' element={<HomePage />} />
</Route> 


  <Route path="/login" element={<Login/>}/>
  <Route path="registration" element={<RegisterUser/>}/>
  {/* <Route path="/getdata" element={<FetchApi/>}/> */}
  <Route path="/createbook" element={<CreateBookPost/>}/>
  {/* <Route path="/updatebook" element={<UpdateBook/>}/> */}
{/* 
  <Route path="/homepage" element={<BookList/>}>
  <Route path=':bookId' element={<BookDetails />} />
  </Route> */}
{/* 
  <Route path="/onebook" element={<OneBook/>}/> */}
</Routes>
</BrowserRouter>
);



