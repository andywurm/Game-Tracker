import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className='footerContainer'>

            <div className='footerBody'>
                <div className='left'>Game Tracker &#169; Last Updated: July 2024</div>
                <div className='right'>
                    <FacebookIcon className='icon'/>
                    <TwitterIcon className='icon'/>
                    <InstagramIcon className='icon'/>
                </div>
            </div>

        </div>)
}
export default Footer;