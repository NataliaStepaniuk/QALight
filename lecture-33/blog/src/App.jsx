import './App.css'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Posts from './components/Posts';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Chat from './components/Chat';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Gallery />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
