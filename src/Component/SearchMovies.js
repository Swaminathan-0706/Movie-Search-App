import React from 'react';
import './SearchMovies.css'

function SearchMovies() {
    const searchMovies=()=>{
        
    }
    return (
        <div>
            <form onSubmit={searchMovies} className="form">
                <label htmlFor="query"className="label">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="Type Movie name you wanted to search..."/>
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchMovies

