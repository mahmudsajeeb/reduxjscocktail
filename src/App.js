import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Index'
import SingleCocktail from './components/SingleCocktail'
import Header from './components/Header'

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

