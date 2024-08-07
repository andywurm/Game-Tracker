import './GameCarousel.css'
import GameCarouselImages from './GameCarouselImages/GameCarouselImages'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface IGameCarouselProps {
    list: any[]
    title: string
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const GameCarousel = (props: IGameCarouselProps) => {
    console.log(props.list)
    return (
        <div className='carouselContainer'>
            <div className='title'>{props.title}</div>

            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}>
                {/* <div className='caroContainer'> */}
                    {props.list.map((i) => {
                        return <GameCarouselImages game={i} />
                    })}
                {/* </div> */}
            </Carousel>

        </div>)
}
export default GameCarousel;