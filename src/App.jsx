import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}
