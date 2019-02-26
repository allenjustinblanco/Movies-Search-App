import React, { Component } from 'react';

class MovieRow extends Component{
    render() {
        return(
            <div>
                <table key={this.props.movie.id}>
                    <tbody>
                    <tr>
                        <td>
                            <img src={this.props.movie.image} width="200" alt="poster"/>
                        </td>
                        <td>
                            Title:{this.props.movie.title}
                        </td>
                        {/*<td>*/}
                            {/*Description: {this.props.movie.description}*/}
                        {/*</td>*/}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MovieRow;