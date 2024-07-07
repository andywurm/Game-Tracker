import React from 'react'
import featuredGames from '../../FeaturedList'
import './LandingPage.css'

const LandingPage = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [featGames, setFeatGames] = React.useState(featuredGames)

    React.useEffect(() => {
        const timerId = setInterval(
            () =>
                setCurrentSlide(() =>
                    currentSlide === featGames.length-1 ? 0 : currentSlide + 1
                ),
            10000
        );
        return () => clearInterval(timerId);  
    }, [currentSlide]);

    return <div className='landingPageContainer'>

        <div className='featuredContainer'>

           <div className='fGameInfo'>
                <div className='gameLogo'>
                    <img src={featGames[currentSlide].titleIMG} className='titleIMG' />
                </div>
                <div className='hook'>{featGames[currentSlide].hook}</div>
                <div className='summary'>{featGames[currentSlide].summary}</div>
                <div className='readMore'><button className='readMoreBtn' onClick={() => console.log("clicked")}>Read More</button></div>
            </div>

            <div className='fGradient'>
                <div className='fBackContainer'>
                    <div className='fBlank'></div>
                    <div className='fMainIMG'>
                        <img src={featGames[currentSlide].mainIMG} className='mainIMG' />
                    </div>
                </div>
            </div>

        </div>

    </div>
}
export default LandingPage;