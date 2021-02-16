import React from 'react';

const SearchForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input 
                type='text'
                placeholder={'Search...'}
            /> 
            <button type='submit'>GO!</button>
        </form>
    )
}


export default SearchForm;
 