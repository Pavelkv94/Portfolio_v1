import React from 'react';
import s from './FindWork.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'
import { Button } from '../common/elements/button/Button';
import { Title } from '../common/elements/Title/Title';



export function FindWork() {
    return (
        <div className={s.findBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Title title="I Am Available For Freelancer" />
                <Button title="Hire Me" />
            </div>
        </div>
    )
}