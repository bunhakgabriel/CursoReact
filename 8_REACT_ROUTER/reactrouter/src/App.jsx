import './App.css'
import { useEffect, useState } from 'react'

// 1 - config react router // Elementos que estão fora da tag '<Routes>' serão exibidos em todas as paginas
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

function App() {

  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search (formulario de busca) */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - rota dinâmica */}
          <Route path='/product/:id' element={<Product />} />
          {/* 6 - nested route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9 - search (pagina de busca) */}
          <Route path='/search' element={<Search />} />
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to="/about" />} />  {/* company é uma rota antiga que não existe mais, quando algum usuario tenta entrar nela, ele é redirecionado para /about */}
          {/* 7 - no match route (pagina 404) */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
