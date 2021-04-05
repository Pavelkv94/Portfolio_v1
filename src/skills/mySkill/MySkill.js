import React from 'react';
import s from './MySkill.module.css'



export function MySkill(props) {
    return (
        <div className={s.mySkillBlock}>
            <div className={s.icon}>s</div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}