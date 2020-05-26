import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {

    return (

        <div class="wrap">
   <div class="search">
      <input  onChange={searchChange} type="text" class="searchTerm" placeholder="Search Patients" />
      
   </div>
</div>
                
            
        


    );

}

export default SearchBox;