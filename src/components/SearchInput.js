import React, { useRef } from 'react';
import './SearchInput.css';
import { useDispatch } from 'react-redux';
import { fetchSearchCocktail } from '../redux/features/cocktailSlice';

function SearchInput() {
  const searchValue = useRef();
  const dispatch = useDispatch()

  
  const handleChange = (e) => {
    const searchText = searchValue.current.value
   dispatch(fetchSearchCocktail({searchText}));
  }
  const handleSubmit =(e ) =>{
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <div className="form-control">
        <form className='search-form' onSubmit={handleSubmit}>
          <label htmlFor="name">Search Cocktail</label>
          <input type="text" name='name' id='name' ref={searchValue} onChange={handleChange} />
          
        </form>
      </div>
    </section>
  );
}

export default SearchInput;
