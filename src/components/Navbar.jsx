import React from "react";
import { Nav, Title } from './HomeStyle'


const Navbar = () => {
    return (
        <Nav>
            <Title>CartRedux</Title>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/10103/10103234.png" alt="Oops" /> <span>0</span>
            </div>
        </Nav>
    )
}

export default Navbar;