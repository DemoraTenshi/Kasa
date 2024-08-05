import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Housing from './pages/housing/Housing'
import Error404 from './pages/error404/Error404'
import About from './pages/about/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer' 

function App ()
{
    return (
        <Router>
            <div className='main__container'>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Housing/:id' element={<Housing/>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='*' element={<Error404/>}></Route>
            </Routes>
            <Footer/>
            </div>
        </Router>
    )
}

export default App
   


