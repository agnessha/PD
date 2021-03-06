import React from 'react'
import  '../../App.css'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {connect} from "react-redux";
import {changeNavbarClass} from "../../redux/NavbarReducer";
import {HeaderNavbar} from "./HeaderNavbar";
import { Spacer, Box, Flex } from '@chakra-ui/react'
import logo from '../../img/logo.png'

const Header = (props) => {
    return (
        <div className='header'>
            <Flex>
                {/*<HamburgerIcon w={6} h={6} color='#f5f8ff' cursor='pointer' onClick={() => {*/}
                {/*    props.changeNavbarClass()*/}
                {/*}}/>*/}
                <img src={logo} alt="" className='logo'/>
                <Spacer/>
                <HeaderNavbar/>
            </Flex>
        </div>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNavbarClass: () => {
            dispatch(changeNavbarClass())
        }
    }
}
let mapStateToProps = (state) => {
    return {
        navbarActive: state.navbar.navbarActive
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)



export default HeaderContainer;