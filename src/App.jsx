import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import React from 'react'
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route element={<PrivateRoute/>}>
        <Route path="/Profile" element={<Profile/>} />
        </Route>
        
    </Routes>
    </BrowserRouter>
  )
}
