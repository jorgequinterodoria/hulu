import React from 'react'
import '../css/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Inicio</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Tendencias</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Verificadas</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Colecciones</p>
                </div>
                <div className="header__icon">
                    <SearchIcon />
                    <p>Búsqueda</p>
                </div>
                <div className="header__icon">
                    <PersonOutlineIcon />
                    <p>Cuenta</p>
                </div>
            </div>
            <img
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                alt=""
            />
        </div>
    )
}

export default Header
