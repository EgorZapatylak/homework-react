import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to={'/pre-junior'}>Pre-junior</NavLink>---
            <NavLink to={'/junior'}>Junior</NavLink>---
            <NavLink to={'/junior-plus'}>Junior plus</NavLink>---
            {/*// add NavLinks*/}

        </div>
    )
}

export default Header
