import React, { useEffect, useState } from 'react';
import Movie from './components/Movies';
//import { Dropdown } from 'semantic-ui-react';
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App(){
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    getMovies(FEATURED_API);
  },[]);

    const getMovies = (API) => {
      fetch(API)
      .then((res) => res.json())
      .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
    }
    const handleOnSubmit = (e) => {
      e.preventDefault();

      if(searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm('');
      }
    };

    const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
    }

  return (
    <React.Fragment>
    <header>
      <span className="logo">HanK movie's</span>
      <form onSubmit={handleOnSubmit}>
        <input className="search" type="search" placeholder="Search...." value={searchTerm} onChange={handleOnChange}/>
      </form>
    </header>
  <div className="movie-container">
    {movies.length > 0 && movies.map((movie) => 
      <Movie key={movie.id} {...movie} />
    )}
  </div>
  </React.Fragment>
  );
}
 
export default App;
