import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'
import { MySkill } from './mySkill/MySkill';
import { Title } from '../common/elements/Title/Title';


export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title="My skills" />
                <div className={s.skills}>
                    <MySkill title="React" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..." />
                    <MySkill title="HTML" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..." />
                    <MySkill title="JavaScript" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..." />
                </div>
            </div>
        </div>
    )
}