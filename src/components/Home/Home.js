import React from 'react';

import './Home.css';

const Home = (props) => {
    return (
        <>
            <h1 className='home__title'>Home Page</h1>
            <img className="home__image" src="logo.png" style={{ width: 896, height: 399 }}/>
        </>
    );
}

export default Home;