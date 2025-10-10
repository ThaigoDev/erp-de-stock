import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/DashboardPage/Dashboard';

function App() {

  return (

    <Router>
      <Routes>
       <Route path = "/" element = {<Dashboard/>}/>
      </Routes>
    </Router>

  )
}

export default App
