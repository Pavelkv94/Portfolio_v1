import React from 'react';
import s from './MySkill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export function MySkill(props) {
    return (
        <div className={s.mySkillBlock}>
            <div className={s.iconBlock}>
                <FontAwesomeIcon icon={props.icon} className={s.icon}/>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}