import React from 'react'
import s from './Header.module.css'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {connect} from "react-redux";
import {changeNavbarClass} from "../../redux/NavbarReducer";

const Header = (props) => {
    console.log(props.navbarActive)
    return (
        <div className={s.header}>
            <HamburgerIcon w={6} h={6} color='#f5f8ff' cursor='pointer' onClick={() => {
                props.changeNavbarClass()
            }}/>
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
    console.log(state)
    return {
        navbarActive: state.navbar.navbarActive
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)



export default HeaderContainer;