import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import History from './Pages/History'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='' Component={Landing} />
      <Route path='dash' Component={Dashboard} />
      <Route path='his' Component={History} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
