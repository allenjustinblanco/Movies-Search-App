import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import movieSvg from '../movie_icon.svg';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <img src={movieSvg} width="30"/>
                    <Typography variant="title" color="inherit">
                         Movies React App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar;