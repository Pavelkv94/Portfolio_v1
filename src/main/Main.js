import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'


export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
            <div className={s.mainTitle}>
                <span>Hi There </span>
                <h1> My name is Pavel Kozlov.</h1>
                <p>I'm frontend-developer!</p>
            </div>
            <div className={s.mainPhoto}></div>
            </div>
        </div>
    )
}