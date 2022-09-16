import React from 'react';
import ReactDOM from 'react-dom/client';
import './css_file/reset.css';
import './css_file/variable.css';
import './index.css'
// import './css_file/header.css';
// import App from './App';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main_Page from './components/Main_Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header></Header>
    <Nav></Nav>
    <Main_Page></Main_Page>
    <Footer></Footer>
  </>
);
