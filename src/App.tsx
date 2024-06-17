import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import { GlobalStyles } from "./styles/GlobalStyle";
import ReservationForm from "./pages/ReservationForm";
import SessionDetail from "./pages/SessionDetail";
import ContactForm from "./pages/ContactForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/reservation" element = {<ReservationForm/>}/>
        <Route path = "/session/:id" element= {<SessionDetail/>}/>
        <Route path = "/contact" element= {<ContactForm/>}/>
      </Routes>
    </Router>

  );
};

export default App;
