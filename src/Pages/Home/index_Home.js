import React from 'react';
import Banner from './Banner';
import ClientsLogo from './ClientsLogo';
import HomeBlog from './HomeBlog';
import Products from './Products';
import Recommandation from './Recommandation';
import Reviews from './Reviews';

function Home() {
    return (
        <div>
            <Banner />
            <Products />
            <Recommandation />
            <HomeBlog />
            <ClientsLogo />
            <Reviews />
        </div>
    );
}

export default Home;
