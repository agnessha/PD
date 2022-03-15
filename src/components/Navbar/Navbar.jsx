import React from 'react'
import './Navbar.css'
import { CalendarIcon } from '@chakra-ui/icons'
import {today} from '../../jsDate/date'


const Navbar = (props) => {


    return (
        <div className={props.navbarClass? 'menu' : 'menu' +' '+ 'hiden'}>
            <div className='menuItems'>
                <div className='menuItem'>
                    <div className='calendarIcon'>
                        {today}
                    </div>
                    <span>
                        Today
                    </span>
                </div>
                <div className='menuItem'>
                    <CalendarIcon w={19} h={19} color={'white'}/>
                    <span>
                        Calendar
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;