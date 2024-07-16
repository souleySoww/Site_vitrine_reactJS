import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import { GlobalStylesLight, GlobalStylesNight } from "./styles/GlobalStyle";
import ReservationForm from "./pages/ReservationForm";
import SessionDetail from "./pages/SessionDetail";
import ContactForm from "./pages/ContactForm";
import Navbar from "./components/Navbar";
import EmployeeList from "./components/EmployeeList";
import CreateAndEditSession from "./components/CreateAndEditSession";
import ThemeContext from "./context/ThemeContext";

function App() {
  const themeContext = useContext(ThemeContext);

    const GlobalStyles = themeContext?.theme === 'night' ? GlobalStylesNight : GlobalStylesLight;
    
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/reservation" element = {<ReservationForm/>}/>
        <Route path = "/contact" element= {<ContactForm/>}/>
        <Route path ="/employees" element={<EmployeeList/>}/>
        <Route path = "/sessions" element = {<CreateAndEditSession/>}/>
      </Routes>
    </Router>

  );
};

export default App;
