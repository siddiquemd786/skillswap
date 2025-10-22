// src/App.jsx
import './App.css';

import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSlider from './components/home/HeroSlider';


function App() {
  return (
    <div className="min-h-screen flex flex-col ">
     <header className='space-y-10'>
       <Navbar />
       <HeroSlider></HeroSlider>
     </header>

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
