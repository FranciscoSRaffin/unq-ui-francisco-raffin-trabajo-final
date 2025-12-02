
import './App.css'
import Inicio from './pages/Inico'
import { BrowserRouter, Routes, Route } from 'react-router'
import DifficultySelector from './pages/DifficultySelector'
import Game from './pages/Game'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/difficulty-selector" element={<DifficultySelector />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
