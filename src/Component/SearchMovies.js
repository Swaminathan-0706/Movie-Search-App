import React,{useState} from 'react';
import './SearchMovies.css'
import MovieCard from './MovieCard';

function SearchMovies() {

    const [query,setQuery]=useState(' ');
    const [movies,setMovies]=useState([]);
    const searchMovies= async (e)=>{
        e.preventDefault();
        const key="ae398b9299120106e83885e43587b6fc";
        const URL=`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const res=await fetch(URL);
            const data=await res.json();
            setMovies(data.results);
            if(data.results.length===0){
                alert("No movies based on the search,Please Try with other names.");
            }

        }
        catch(err){
            console.log(err);
        }
        
    }
    return (
        <>
            <form onSubmit={searchMovies} className="form">
                <label htmlFor="query"className="label">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="Type Movie name you wanted to search..."  onChange={(e)=>setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form>
            {
                <MovieCard list={movies}/> 
            }
              
        </>
    )
}

export default SearchMovies

