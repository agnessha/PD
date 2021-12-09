import React from 'react';
import ReactDOM from 'react-dom';
import style from './Navbar.module.css'
import notes from '../../img/notes.png'
import calendar from '../../img/calendar.png'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbarInner}>
            <div className={style.navbarLink}>
                <NavLink to='/'>
                    <img src={notes} alt=""/>
                    <div className={style.navbarLinkText}>
                    My notes
                    </div>
                </NavLink>
            </div>
            <div className={style.navbarLink}>
                <NavLink to='/calendars'>
                    <div className={style.navbarLinkImg}>
                    <img src={calendar} alt=""/>
                    </div>
                    <div className={style.navbarLinkText}>
                    Calendars
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;