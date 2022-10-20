import React from 'react';
import './Header.scss';
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const {pathname} = useLocation();

    return (
        <div className="header">
            <Link to='/' className={pathname === '/' ? "active" : "headerLink"}
            >
                Форма
            </Link>

            <Link to='/palette' className={pathname === '/palette' ? "active" : "headerLink"}
            >
                Палитра
            </Link>
        </div>
    );
};

export default Header;