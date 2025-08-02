import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/Header.tsx'

// TextReveal.tsx (or a top-level gsap setup file)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './components/Footer.tsx'

// you have to do this once, before you create any ScrollTrigger instances
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>,
)
