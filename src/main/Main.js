import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import Particles from 'react-particles-js'
import Tilt from 'react-tilt'

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
                <div className={s.mainTitle}>
                    <h1>Hi There </h1>
                    <span> My name is <span>Pavel</span> <span>Kozlov.</span></span>
                    <p>I'm frontend-developer!</p>
                </div>
                <div className={s.mainPhoto}>
                </div>
            </div>
        </div>
    )
}