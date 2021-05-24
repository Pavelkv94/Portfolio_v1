import React from 'react';
import s from './Footer.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { Item } from './Item/Item';
import { faFacebook, faGithub, faLinkedin, faVk } from '@fortawesome/free-brands-svg-icons';



export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 >Pavel</h2>
                <div className={s.items}>
                    <Item icon={faVk} link="https://vk.com/"/>
                    <Item icon={faFacebook} link="https://facebook.com/"/>
                    <Item icon={faLinkedin} link="https://www.linkedin.com/in/pavel-kv94/"/>
                    <Item icon={faGithub} link="https://github.com/Pavelkv94"/>
                </div>
                <p></p>
            </div>
        </div>
    )
}