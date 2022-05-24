import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ClientsLogo from './ClientsLogo';
import HomeBlog from './HomeBlog';
import NewlyArrivedProducts from './NewlyArrivedProducts';
import Products from './Products';
import Recommandation from './Recommandation';
import Reviews from './Reviews';

function Home() {
    return (
        <div>
            <Banner />
            <BusinessSummery />
            <Products />
            <NewlyArrivedProducts />
            <Recommandation />
            <HomeBlog />
            <Reviews />
            <ClientsLogo />
        </div>
    );
}

export default Home;
