import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Products from './pages/LoginPage/Login'
function App() {

  return (

    <Router>
      <Routes>
       <Route path = "/" element = {<Login/>}/>
       <Route path = "/products" element = {<Products/>}/>
      </Routes>
    </Router>

  )
}

export default App
