import React from 'react'
import Header from './header'
import HeroSection from './heroSection'
import ChooseUs from './chooseUs'
import Guidance from './guidance'
import ExploreLibrary from './exploreLibrary'
import Footer from './footer'
import LastSection from './lastSection'


function Layout() {
    return (
        <div className=''>
            <Header/>
            <HeroSection/>
            <ChooseUs/>
            <Guidance/>
            <ExploreLibrary/>
            <LastSection/>
            <Footer/>
            
        </div>
    )
}

export default Layout