import React from 'react'
import featuredGames from '../../FeaturedList'
import './LandingPage.css'

const LandingPage = () => {

    const [currentSlide, setCurrentSlide] = React.useState(1)

    return <div className='landingPageContainer'>

        <div className='featuredContainer'>
            <div className='fGradient'>
                <div className='fBackContainer'>
                    <div className='fBlank'></div>
                    <div className='fMainIMG'>
                        <img src={featuredGames[currentSlide].mainIMG} className='mainIMG' />
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default LandingPage;