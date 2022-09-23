import React from 'react';
import ReactDOM from 'react-dom/client';
import './css_file/reset.css';
import './css_file/variable.css';
import './index.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main_Page from './pages/Main_Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header></Header>
    <Nav></Nav>
    <Main_Page></Main_Page>
    <Footer></Footer>
  </>
);
