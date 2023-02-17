import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './index.css';


import User from './code/user';
import HomePage from './code/homePage';
import Registration from './code/registrstionPage';
import FetchApi from './code/getdata';
import CreateBook from './code/createBook';
import UpdateBook from './code/updateBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage/>}/>
  <Route path="/login" element={<User/>}/>
  <Route path="registration" element={<Registration/>}/>
  <Route path="/getdata" element={<FetchApi/>}/>
  <Route path="/createbook" element={<CreateBook/>}/>
  <Route path="/updatebook" element={<UpdateBook/>}/>
</Routes>
</BrowserRouter>
);



