import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './menu.css'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://www.youtube.com'>
                <BsYoutube color="#FFF" size={24}/>
            </a>
            <a className='social' href='https://www.instagram.com'>
                <BsInstagram color="#FFF" size={24}/>
            </a>

            <Link className='menu-item' to="/links" >
                Meus Links
            </Link>
        </div>
    )
}