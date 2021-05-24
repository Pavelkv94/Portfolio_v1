import React from 'react';
import s from './Button.module.scss'



export function Button(props) {
    return (
        <form action={props.linker}>
            <button className={s.button} type={props.type}>
                {props.title}
            </button>
        </form>
    )
}