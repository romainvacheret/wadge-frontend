import React from 'react';

import './Home.css';

const Home = (props) => {
    return (
        <>
            <h1 className='Title'>Home Page</h1>
            <img className='Image' src="logo.png" style={{ width: 896, height: 399 }}/>
        </>
    );
}

export default Home;