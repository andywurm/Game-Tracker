import './App.css';
import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

const Landing = lazy(() => import('./Pages/LandingPage/LandingPage'))
const GameClicked = lazy(() => import('./Pages/GameClickedPage/GameClicked'))

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/GameClicked" element={<GameClicked />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
