import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
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

const tiltOpt = {
    reverse: false,  // reverse the tilt direction
    max: 20,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 200,    // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export function Main() {
    return (
        <div className={s.mainBlock} id="main">
            <Particles className={s.particles} params={particlesOpt} />
            <div className={styleContainer.container}>
                <Fade left>
                    <div className={s.mainTitle}>
                        <h1>Hi There </h1>
                        <span> My name is Pavel Kozlov.</span>
                        <br />
                        <ReactTypingEffect text="I'm frontend-developer!" />
                    </div>

                </Fade>
                <Fade right>
                    <Tilt className="Tilt" options={tiltOpt}>
                        <div className={s.mainPhoto}>
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    )
}