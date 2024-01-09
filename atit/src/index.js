import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./css/animation.css";
import "./css/blog.css";
import "./css/Pay-after-placement.css";
import './css/index.css';
import "./css/Swiper.css"

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollTop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop/>
    <App /> 
    {/* <Main/> */}
  </BrowserRouter>
);


