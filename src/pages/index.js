import React from 'react'
import SearchInput from '../components/SearchInput'
import CocktailList from '../components/CocktailList'

export default function Home() {
  return (
    <div>
    <SearchInput />  
    <div className="cocktailMargin">
    <CocktailList />
    </div>
    </div>
  )
}
