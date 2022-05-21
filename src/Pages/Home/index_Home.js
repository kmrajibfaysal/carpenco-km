import React from 'react';
import Banner from './Banner';
import HomeBlog from './HomeBlog';
import Products from './Products';
import Recommandation from './Recommandation';

function Home() {
    return (
        <div>
            <Banner />
            <Products />
            <Recommandation />
            <HomeBlog />
        </div>
    );
}

export default Home;
