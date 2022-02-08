import React from 'react';

import { Link, Grid } from '@material-ui/core';

import './Home.css';

const Home = () => {
    return (
        <>
        <Grid container direction='column' alignContent='center' alignItems='center' justifyContent='center'>
            <Grid item>
                <Link href="/fridge" >
                    <img alt=" " className="home__image" src="logo.png" style={{ width: 800, height: 'auto' }}/>
                </Link>
            </Grid>
        </Grid>
            

        </>
    );
}

export default Home;