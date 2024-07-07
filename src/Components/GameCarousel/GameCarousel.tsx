import './GameCarousel.css'
import GameCarouselImages from './GameCarouselImages/GameCarouselImages'

interface IGameCarouselProps{
    list: any[]
    title: string
}

const GameCarousel = (props:IGameCarouselProps) => {
    console.log(props.list)
    return(
    <div className='carouselContainer'>
        <div className='title'>{props.title}</div>
        <div className='caroContainer'>
        {props.list.map((i) => {
            return <GameCarouselImages game={i}/>
        })}
        </div>
    </div>)
}
export default GameCarousel;