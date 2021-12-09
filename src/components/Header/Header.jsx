import React from 'react';
import ReactDOM from 'react-dom';
import style from './Header.module.css'
import logo from '../../img/Notes.......png'
import profileImg from '../../img/user.png'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.imgLogo}>
                <img src={logo} className={style.logo} alt=""/>
            </div>
            <div className={style.profileLink}>

                <div className={style.profileImg}>
                    <img src={profileImg}
                         className={style.profileImg}
                         alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Header;