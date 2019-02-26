import React, { Component } from 'react';

class MovieRow extends Component{
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
                            <h1>{this.props.movie.title}</h1>
                            <p>{this.props.movie.overview}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MovieRow;