import React from 'react';
import { Button } from '../../common/elements/button/Button';
import s from './SingleProject.module.css'


export function SingleProject(props) {
    return (
        <div className={s.project}>
           <div className={s.image}>
             <Button title="view"/>
           </div>
           <h3 className={s.title}>{props.title}</h3>
           <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}