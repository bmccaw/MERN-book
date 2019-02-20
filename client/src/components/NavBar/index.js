import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function NavBar () {
    <NavDiv>
        <NavHeader><Link to="/" className={window.location.pathname === "/"}>NYT/Google Books Search</Link></NavHeader>
        <Link to="/search" className={window.location.pathname === "/search"}>Search</Link>
        <Link to="/saved" className={window.location.pathname === "/save"}>Save</Link>
    </NavDiv>
}
