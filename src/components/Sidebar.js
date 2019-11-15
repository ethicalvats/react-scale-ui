import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const Sidebar = ({className}) =>{
    return(
            <aside className={className}>
            <nav>
                <ul>
                    <NavLink to="/signup">Signup</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </ul>
            </nav>
        </aside>
    )
}

const StyledSidebar = styled(Sidebar)`
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 20%;
    background-color:#ccc;
    padding-top:200px;
` 

export default StyledSidebar