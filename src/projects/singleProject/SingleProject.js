import React from 'react';
import { Button } from '../../common/elements/button/Button';
import s from './SingleProject.module.scss'


export function SingleProject(props) {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <Button title="Look" />
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>
                    {props.description}
                </span>
            </div>
        </div>
    )
}