import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Link to="/">
                Home
            </Link>

            <Link to="/products">
                Products
            </Link>
        </>
    )
}

export default NavBar;