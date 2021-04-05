import React from 'react';
import s from './FindWork.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'
import { Button } from '../common/elements/button/Button';



export function FindWork() {
    return (
        <div className={s.findBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h2 className={s.title}>I Am Available For Freelancer</h2>
                <Button title="Hire Me" />
            </div>
        </div>
    )
}