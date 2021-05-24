import React from 'react';
import s from './Header.module.scss'
import { Nav } from './nav/Nav';


export function Header() {
    return (
        <div className={s.header}>
           <Nav />
        </div>
    )
}