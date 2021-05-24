import React from 'react';
import s from './Item.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Item(props) {
    return (
        <div className={s.item}>
            <a href={props.link}>
                <FontAwesomeIcon icon={props.icon} className={s.icon} />
            </a>
        </div>
    )
}