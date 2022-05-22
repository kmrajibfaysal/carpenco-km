import React from 'react';
import Banner from './Banner';
import ClientsLogo from './ClientsLogo';
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
            <ClientsLogo />
        </div>
    );
}

export default Home;
