import React from 'react';
import s from './Main.module.css'


export function Main() {
    return (
        <div className={s.mainContainer}>
            <div className={s.mainBlock}>
            <div className={s.mainTitle}>
                <span>HELLO!!! </span>
                <h1> My name is Pavel.</h1>
                <p>I'm frontend-developer!</p>
            </div>
            <div className={s.mainPhoto}></div>
            </div>
        </div>
    )
}