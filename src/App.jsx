import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/about/About'
import Error404 from './pages/error404/Error404'
import Home from './pages/home/Home'
import Housing from './pages/housing/Housing'

function App() {
  return (
    <Router>
      <div className="main__container">
        <Header />
        <main className="main__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Housing/:id" element={<Housing />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App