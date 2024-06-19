import React from 'react'
import featuredGames from '../../FeaturedList'
import './LandingPage.css'

const LandingPage = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0)

    return <div className='landingPageContainer'>

        <div className='featuredContainer'>

            <div className='fGameInfo'>
                <div className='gameLogo'>
                    <img src={featuredGames[currentSlide].titleIMG} className='titleIMG'/>
                </div>
                <div className='hook'>{featuredGames[currentSlide].hook}</div>
                <div className='summary'>{featuredGames[currentSlide].summary}</div>
                <div className='readMore'><button className='readMoreBtn' onClick={()=> console.log("clicked")}>Read More</button></div>
            </div>

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