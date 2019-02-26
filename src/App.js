import React, { Component } from 'react';
import './App.css';
import movieSvg from './movie_icon.svg';
import MovieRow from './MovieRow.js';

class App extends Component {
  constructor(props){
    super(props);

    const movies = [
      {id: 0, title: "Harry Potter", rating: 5},
      {id: 1, title: "Star Wars", rating: 4}
    ];

    let movieRows = [];
    movies.forEach((movie) => {
      const movieRow = <MovieRow movie={movie}/>;
      movieRows.push(movieRow)
    });

    this.state = {rows: movieRows}
  }
  render() {
    return (
      <div className="App">
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
