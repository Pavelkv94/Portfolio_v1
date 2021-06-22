import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        }
    }
}

export function Main() {
    return (
        <div className={s.mainBlock}>

            <Particles className={s.particles} params={particlesOpt} />

            <div className={styleContainer.container}>
                <Fade left>
                    <div className={s.mainTitle}>
                        <h1>Hi There </h1>
                        <span> My name is Pavel Kozlov.</span>
                        <br/>
                        <ReactTypingEffect text="I'm frontend-developer!" />
                    </div>
                   
                </Fade>
                <Fade right>
                    <div className={s.mainPhoto}>
                    </div>
                </Fade>
            </div>
        </div>
    )
}