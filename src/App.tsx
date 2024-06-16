import './App.css';
import React, {lazy} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Landing = lazy(() => import('./Pages/LandingPage/LandingPage')) 
const GameClicked = lazy(() => import('./Pages/GameClickedPage/GameClicked')) 

function App() {

  const [games, setGames] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch('http://localhost:8000/api/v1/games/')
    .then((res) => res.json())
    .then((data)  => setGames(data))
  },[])

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/GameClicked" element={<GameClicked/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
