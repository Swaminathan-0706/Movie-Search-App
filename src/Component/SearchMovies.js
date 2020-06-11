import React,{useState} from 'react';
import './SearchMovies.css'

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
        console.log(data.results);
        setMovies(data.results);

        }
        catch(err){
            console.log(err);
        }
        
    }
    return (
        <>
            <form onSubmit={searchMovies} className="form">
                <label htmlFor="query"className="label">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="Type Movie name you wanted to search..." value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie=>movie.poster_path).map(movie=>(
                <div className="card" key={movie.id}>
                        <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + "poster"}></img>
                    <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                            <p>
                            <small>RELEASE DATE: {movie.release_date}</small>
                            </p>
                                <p>
                                <small>RATING: {movie.vote_average}</small>
                                </p>
                                <p className="card--desc">{movie.overview}</p>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default SearchMovies

