import React from 'react';
import ReactDOM from 'react-dom/client';
import Movies from './Component/movies'
import Home from './Layout/Home'
import { BrowserRouter, Redirect, Routes, Route } from "react-router-dom";
import Adminlogin from './Component/adminlogin'
import Admindash from './Layout/admindash'
import AddMovie from './Layout/admin/addmovie'
import { combineReducers } from 'redux';
import { sessionReducer } from 'react-session';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route>
         <Route index element={<Home />} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Adminlogin" element={<Adminlogin/>} />
          <Route path="/AdminDash" element={<Admindash/>} />
          <Route path="/AddMovie" element={<AddMovie/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}





root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
