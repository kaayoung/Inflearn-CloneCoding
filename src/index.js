import React from 'react';
import ReactDOM from 'react-dom/client';
import './css_file/reset.css';
import './css_file/variable.css';
import './index.css'
import './css_file/courseList.css' ;
import './css_file/courseDetail.css' ;

import Header from './components/common/Header';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Main_Page from './pages/Main_Page';
import CourseDetail_page from './pages/CourseDetail_page' ;
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseList from './pages/CourseList_Page';
import { RecoilRoot } from 'recoil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Header></Header>    
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Main_Page/>} />
        <Route path='/courseList' element={<CourseList/>} />
        <Route path='/courseList/:title' element={<CourseDetail_page/>} /> 
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </RecoilRoot>
);
