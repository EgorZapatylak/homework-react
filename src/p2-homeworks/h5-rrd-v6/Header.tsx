import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.menu}>
            <NavLink className={s.menu_item} to={'/pre-junior'}>Pre-junior</NavLink>
            <NavLink className={s.menu_item} to={'/junior'}>Junior</NavLink>
            <NavLink className={s.menu_item} to={'/junior-plus'}>Junior plus</NavLink>
            {/*// add NavLinks*/}
        </div>
    )
}

export default Header
