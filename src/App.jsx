import './App.css'
import Home from './components/pages/Home'
import RootLayOut from './components/layout/RootLayOut'
import { Routes, Route } from 'react-router-dom'
import About from './components/pages/About'



function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
