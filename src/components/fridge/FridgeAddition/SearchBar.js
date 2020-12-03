import React from 'react';

const SearchBar = ({ searchFood, handleChange }) => {
    return (
        <div className='col-xs-4 searchBar'>
                <div className='form-group has-success"' >
                    <div className="input-group">
                        <input 
                            type='text' 
                            value={ searchFood } 
                            className='form-control' 
                            onChange={ handleChange } 
                            placeholder='Recherche par nom' 
                            aria-describedby="inputSuccess2Status"
                        />
                    </div>
                </div>
            </div>
    );
};

export default SearchBar;