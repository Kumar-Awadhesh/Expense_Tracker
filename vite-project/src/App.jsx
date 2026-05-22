import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard';
import AddTransaction from './components/addTransaction';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { UserProvider } from './context/userContext';

import './App.css'

function App() {


  return (
    <>
      <UserProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addTransaction' element={<AddTransaction />} />
        </Routes>
        <Footer/>
      </UserProvider>
    </>
  )
}

export default App
