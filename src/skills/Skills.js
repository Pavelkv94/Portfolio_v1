import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'
import { MySkill } from './mySkill/MySkill';


export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <MySkill title="React" description="asdasd ds kdsa khhda shasdasddsasdasdasd askkhadskda skdksa hkdash k dkds akdas kjadksj kjda s..." />
                    <MySkill title="HTML" description="asdasd ds kdsa khhda shd askkhadskda skdksa hkdash k dkds akdas kjadksj kjda s..." />
                    <MySkill title="JavaScript" description="asdasd ds kdsa khhda shd askkhadskda skdksa hkdash k dkds akdas kjadksj kjda s..." />
                </div>
            </div>
        </div>
    )
}