// src/App.jsx
import './App.css';

import { Outlet, useNavigation } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { Toaster } from "react-hot-toast";
import Loading from './components/home/Loading';

function App() {
      const {state} = useNavigation()
  return (
    <>
     <Toaster position="top-center" />
       <div className="min-h-screen flex flex-col ">
     <header >
       <Navbar />
    
     </header>

      <main className="flex-1">
         {state==="loading" ? <Loading/> : <Outlet></Outlet>}  
      </main>
      <Footer />
    </div>
    </>
 
  );
}

export default App;
