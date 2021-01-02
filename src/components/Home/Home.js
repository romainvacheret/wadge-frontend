import React from 'react';

import { Link } from '@material-ui/core';

import './Home.css';

const Home = () => {
    return (
        <>
            <Link href="/fridge" >
              <img alt=" " className="home__image" src="logo.png" style={{ width: 896, height: 399 }}/>
            </Link>
        </>
    );
}

export default Home;