
import './App.css'
import Inicio from './pages/Inico'
import { BrowserRouter, Routes, Route } from 'react-router'
import DifficultySelector from './pages/DifficultySelector'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/difficulty-selector" element={<DifficultySelector />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
