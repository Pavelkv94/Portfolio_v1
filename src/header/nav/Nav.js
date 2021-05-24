import React from 'react';
import s from './Nav.module.scss'

export function Nav() {
    return (
        <div className={s.nav}>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contacts</a>
        </div>
    )
}