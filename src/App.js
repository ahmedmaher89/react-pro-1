import React from 'react'
import About from './componats/About'
import Contact from './componats/Contact'
import Products from './componats/Products'
import Privacy from './componats/Privacy'
import Links from './componats/Links'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



import { BrowserRouter , Router , Route , Routes , Link , NavLink } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <section>
    <nav className='sections'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Products'>Products</Link></li>
          <li><Link to='/Privacy'>services</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          
        </ul>
    </nav>
    
    </section>
      <Routes>
        <Route path='/' element={<Links/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Privacy' element={<Privacy/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Products' element={<Products/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
