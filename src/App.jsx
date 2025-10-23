// src/App.jsx
import './App.css';

import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
     <Toaster position="top-center" />
       <div className="min-h-screen flex flex-col ">
     <header >
       <Navbar />
    
     </header>

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
 
  );
}

export default App;
