import React from 'react';

/**
 * Renders search box.
 * @param {String} searchfield 
 * @returns {TempalteResult} search box
 */
const SearchBox = ({onSearchChange}) => {
  return (
    <>
      <input 
        className='search-input w-25 ba b--slime-10 pa3 mb3'
        type="search" 
        placeholder="Search your robot friend" 
        onChange={onSearchChange}
      />
    </>
  )  
};

export default SearchBox;