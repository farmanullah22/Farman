import React from 'react'
import Sidebar from './components/Sidebar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<About/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
