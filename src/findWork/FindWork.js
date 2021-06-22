import React from 'react';
import s from './FindWork.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { Button } from '../common/elements/button/Button';
import { Title } from '../common/elements/Title/Title';
import Fade from 'react-reveal/Fade';


export function FindWork() {
    return (
        <div className={s.findBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${s.container}`}>
                    <Title title="I Am Available For Freelancer" />
                    <Button title="Hire Me" linker="https://www.linkedin.com/in/pavel-kv94/" />
                </div>
            </Fade>
        </div>
    )
}