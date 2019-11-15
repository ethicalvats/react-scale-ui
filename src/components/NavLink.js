import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const SideBarLink = ({to, className, children}) =>{
    return (
        <li className={className}>
            <NavLink exact to={to} activeClassName="active">{children}</NavLink>
        </li>
    )
}

export default styled(SideBarLink)`
    a{
        padding: 14px 12px 14px 30px;
        color: #333;
        text-transform: uppercase;
        text-decoration: none;
        display: block;
        margin-bottom:2px;
        background-color:#ddd;
        :hover{
            color:#ddd;
            background-color:#444
        }
    }
`