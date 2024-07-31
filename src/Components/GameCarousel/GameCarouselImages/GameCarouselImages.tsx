import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

                <img src={props.game.horizontalcover} alt='' className='cover' />
                <div className='oneLine'>
                    <div className='gameTitle'>{props.game.othername ? props.game.othername : props.game.title}</div>
                    {!favorite ?
                        <AddCircleIcon className='bookmark' onClick={() => setFavorite(!favorite)} />
                        : <CheckCircleIcon className='bookmarkFilled' onClick={() => setFavorite(!favorite)} />}
                </div>

            </div>
        </div>
    )
}
export default GameCarouselImages;