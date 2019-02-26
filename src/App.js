import React, { Component } from 'react';
import './App.css';
import movieSvg from './movie_icon.svg';

class App extends Component {
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
        <input className="searchBar" type='text'/>
      </div>
    );
  }
}

export default App;
