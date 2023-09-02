import React, { useRef } from 'react';
import './SearchInput.css';

function SearchInput() {
  const searchValue = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here using searchValue.current.value
  };

  return (
    <section className='section search'>
      <div className="form-control">
        <form className='search-form' onSubmit={handleSubmit}>
          <label htmlFor="name">Search Cocktail</label>
          <input type="text" name='name' id='name' ref={searchValue} />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}

export default SearchInput;
