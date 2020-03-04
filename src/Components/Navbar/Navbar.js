import React from 'react';
import './Navbar.scss';
import { useStore } from '../../hooks-store/store';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo-color-zh.svg';

const Navbar = props => {
    const state = useStore()[0];

    const list = state.tasks.map((item, i) => {
        if (item.path === '/') {
            return (
                <li key={i}>
                    <NavLink to={item.path} exact>
                        {item.label.zh}
                    </NavLink>
                </li>
            );
        }
        return (
            <li key={i}>
                <NavLink to={item.path}>{item.label.zh}</NavLink>
            </li>
        );
    });

    return (
        <header className="Navbar">
            <Logo />
            <nav>
                <ul>{list}</ul>
            </nav>
        </header>
    );
};

export default Navbar;
