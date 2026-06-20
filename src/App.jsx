// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
// import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header/>
      <div className="flex-1 min-h-0 overflow-y-auto">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} /> 
        <Route path='/his' element={<History/>} />
      </Routes>
      <Footer/>
      </div>
      <ToastContainer />
      </div>
  )
}

export default App
