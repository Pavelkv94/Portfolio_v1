import React from 'react';
import s from './Header.module.scss'
import { Nav } from './nav/Nav';
import Fade from 'react-reveal/Fade';

export function Header() {
    return (
        <div className={s.header}>
            <Nav />
        </div>
    )
}