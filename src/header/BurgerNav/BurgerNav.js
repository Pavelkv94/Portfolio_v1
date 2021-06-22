import React from 'react';
import s from './BurgerNav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';


export function BurgerNav() {

    let [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    };

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.items} ${s.show}` : s.items}>
                <Link
                    activeClass={s.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Skills</Link>            <Link
                    activeClass={s.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Projects</Link>            <Link
                    activeClass={s.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contacts</Link>
            </div>
            <div className={s.burgerBtn} onClick={onBurgerBtnClick}> <FontAwesomeIcon icon={faCertificate} className={s.icon} /></div>
        </div>
    )
}



