import React from 'react';

const SearchBox = ({searchText, onSearchChange}) => {
   return (
      <div className='pa2'>
         <input
            aria-label='Search robots'
            className='tc br3 pa2 ma2 bw0-l'
            type='search'
            placeholder='Search robots'
            onChange={onSearchChange}
         />
      </div>
   );
}

export default SearchBox;