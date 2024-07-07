import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import '../GameCarousel.css'
import { useState } from 'react';

interface IPropsGameCarouselImages {
    game: any
}

const GameCarouselImages = (props: IPropsGameCarouselImages) => {

    const [favorite, setFavorite] = useState(false)
    return (
        <div>
            <div className='coverContainer'>

    
                    {/* <div className='bookmark' onClick={() => setFavorite(!favorite)}>
                        {favorite ? <BookmarkIcon /> : <BookmarkBorderIcon/>}
                        </div> */}
                    <img src={props.game.horizontalcover} alt='' className='cover' />
                
                <div className='gameTitle'>{props.game.othername ? props.game.othername : props.game.title}</div>

            </div>
        </div>
    )
}
export default GameCarouselImages;