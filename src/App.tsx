import './App.css';
import '../src/GameList'
import React from 'react';

interface Game {
  title: string,
  imgs?: string, 
  horizontalcover?: string, 
  verticalcover?: string, 
  releasedate: Date, 
  summary: string, 
  platforms: string[], 
  genres: string[], 
  rating: string, 
  contentrating: string
}

function App() {

  const [games, setGames] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch('http://localhost:8000/api/v1/games/')
    .then((res) => res.json())
    .then((data)  => setGames(data))
  },[])

  games.sort((a,b) => a.id - b.id)

  return (
    <div className="App">
      {games.map((i)=>{
        return <div>{i.title}</div>
      })}
    </div>
  );
}

export default App;
