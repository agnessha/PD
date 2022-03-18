import React from 'react'
import '../../App.css'
import { CalendarIcon } from '@chakra-ui/icons'
import {today} from '../../jsDate/date'
import {NavLink} from "react-router-dom";



const Navbar = (props) => {


    return (
        <div className={props.navbarClass? 'menu' : 'menu' +' '+ 'hiden'}>
            <div className='menuItems'>
                <div className='menuItem'>
                    <NavLink to='/'>
                        <div className='calendarIcon'>
                            {today}
                        </div>
                        <span>
                        Today
                    </span>
                    </NavLink>

                </div>
                <div className='menuItem'>
                    <NavLink to='/calendar'>
                        <CalendarIcon w={19} h={19} color={'white'}/>
                        <span>
                        Calendar
                    </span>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navbar;