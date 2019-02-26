import React, { Component } from 'react';
import './App.css';
import movieSvg from './movie_icon.svg';
import $ from 'jquery';
import MovieRow from "./MovieRow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // const movies = [
    //   {id: 0, title: "Harry Potter", rating: 5},
    //   {id: 1, title: "Star Wars", rating: 4}
    // ];
    //
    // let movieRows = [];
    // movies.forEach((movie) => {
    //   const movieRow = <MovieRow movie={movie}/>;
    //   movieRows.push(movieRow)
    // });
    //
    // this.state = {rows: movieRows}

    this.searchMovies();
  }

    searchMovies() {
      console.log("Perform search");
      const urlString = "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=543485f64f8711068707462131362b40";
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("data retrieved successfully!");
          console.log(searchResults);
          const results = searchResults.results;
          console.log(results);
          let movieRows = [];

          results.forEach((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
            console.log(movie.title);
            const movieRow = <MovieRow movie={movie}/>;
            movieRows.push(movieRow)
          });
          this.setState({rows: movieRows})
        },
        error: (xhr, statsus, err) => {
          console.error("failed to retrieve data")
        }
      })
  }
  render() {
    return (
      <div>
        <table className="titleBar">
          <tr>
            <td>
              <img src={movieSvg} width='50' alt='logo'/>
            </td>
            <td>
              <h1>Movies React App</h1>
            </td>
          </tr>
        </table>
        <input className="searchBar" type='text' placeholder="Enter search term"/>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
