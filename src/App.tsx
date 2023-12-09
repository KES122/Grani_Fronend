import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.scss'
import Home from './Pages/HomePage/Home'
import Page2 from './Pages/Forum/Page2';
import Page3 from './Pages/Forum2/Page3';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/Forum" element={<Page2/>}/>
        <Route path ="/Forum2" element={<Page3/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
