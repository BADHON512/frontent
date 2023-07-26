import React from 'react';
import Header from "../../src/components/Layout/Header.jsx"
import Hero from "../../src/components/Route/Hero/Hero.jsx"
import Categories from "../../src/components/Route/Hero/Categories.jsx"
import BestDeals from "../../src/components/Route/Hero/BestDeals.jsx"
import FeaturedProduct from "../../src/components/Route/FeaturedProduct/FeaturedProduct.jsx"
import Events from "../../src/components/Route/Events/Events.jsx"
import Sponsored from "../../src/components/Route/Sponsored/Sponsored.jsx"
import Footer from "../components/Layout/Footer.jsx"

const HomePage = () => {
    return (
        <div>
           <Header activeHeading={1}/> 
           <Hero/>
           <Categories/>
           <BestDeals/>
           <Events/>
           <FeaturedProduct/>
           <Sponsored/>
           <Footer/>
        </div>
    );
};

export default HomePage;