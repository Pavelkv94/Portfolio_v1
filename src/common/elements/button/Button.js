import React from 'react';
import s from './Button.module.css'



export function Button(props) {
    return (
        <div>
            <button className={s.button} type={props.type}>{props.title}</button>
        </div>
    )
}