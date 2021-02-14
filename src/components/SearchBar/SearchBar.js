import React from 'react';

import './SearchBar.css';

const SearchBar = ({  searchFood, handleChange }) => {
    return (
        <div className='col-xs-4 search-bar'>
                <div className='form-group has-success"' >
                    <div className="input-group">
                        <input 
                            type='text' 
                            value={  searchFood} 
                            className='form-control' 
                            onChange={ handleChange } 
                            placeholder='Rechercher par nom' 
                            aria-describedby="inputSuccess2Status"
                        />
                    </div>
                </div>
            </div>
    );
};

export default SearchBar;