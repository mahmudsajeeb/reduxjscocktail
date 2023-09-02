import React from 'react'
import { Route, Routes } from 'react-router-dom'
 
import Header from './components/Header'
import Home from './pages'
import SingleCocktail from './pages/SingleCocktail'
 

export default function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cocktail/:id' element={<SingleCocktail />}></Route>
    </Routes>
    </div>
  )
}

