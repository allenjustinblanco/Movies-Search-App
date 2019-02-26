import React, { Component } from 'react';

class MovieRow extends Component{
    viewMovie(){
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url
    }

    render() {
        return(
            <div>
                <table key={this.props.movie.id}>
                    <tbody>
                    <tr>
                        <td>
                            <img src={this.props.movie.poster_src} width="200" alt="poster"/>
                        </td>
                        <td>
                            <h2>{this.props.movie.title}</h2>
                            <p>{this.props.movie.overview}</p>
                            <input type="button" value="View" onClick={this.viewMovie.bind(this)}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MovieRow;