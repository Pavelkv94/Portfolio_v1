import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'



export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Pavel</h2>
                <div className={s.items}>
                   <div className={s.item}></div>
                   <div className={s.item}></div>
                   <div className={s.item}></div>
                   <div className={s.item}></div>
                </div>
               <p></p>
            </div>
        </div>
    )
}