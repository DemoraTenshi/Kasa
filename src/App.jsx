import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Housing from './pages/housing/Housing'
import Error404 from './pages/error404/Error404'
import About from './pages/about/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <Router>
            <div className='main__container'>
                <Header />
                <main className='main__content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Housing/:id' element={<Housing />} />
                        <Route path='/About' element={<About />} />
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
