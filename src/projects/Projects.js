import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { SingleProject } from './singleProject/SingleProject';
import { Title } from '../common/elements/Title/Title';
import calcImage from './../assets/images/calc.jpg'
import meditationImage from './../assets/images/meditation.jpg'
import momentumImage from './../assets/images/displayApp.jpg'
import todolistImage from './../assets/images/todolist.jpg'
import counterImage from './../assets/images/counter.jpg'
import loginImage from './../assets/images/login.jpg'
import learnImage from './../assets/images/learn.jpg'
import snImage from './../assets/images/sn.jpg'
import Fade from 'react-reveal/Fade';


export function Projects() {
    const calc = {
        backgroundImage: `url(${calcImage})`,
    };
    const meditation = {
        backgroundImage: `url(${meditationImage})`,
    };
    const momentum = {
        backgroundImage: `url(${momentumImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todolistImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };
    const login = {
        backgroundImage: `url(${loginImage})`,
    };
    const learnCards = {
        backgroundImage: `url(${learnImage})`,
    };
    const sn = {
        backgroundImage: `url(${snImage})`,
    };
    return (
        <div className={s.projectsBlock} id="projects">
            <Fade bottom>
                <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                    <Title title="My projects" />
                    <div className={s.projects}>
                    <SingleProject
                            title="Learn Cards App"
                            description={["Typescript", "React", "Redux", "Redux thunk", "React router dom", "RestAPI", "axios"]}
                            style={learnCards}
                            linker="https://sozdatel31.github.io/FridayIgnatProject/#/profile"
                        />
                        <SingleProject
                            title="Todolist"
                            description={["Typescript", "React", "Redux", "Redux thunk", "Redux Toolkit", "React router dom", "RestAPI"]}
                            style={todolist}
                            linker="https://pavelkv94.github.io/Todolist/"
                        />
                        <SingleProject
                            title="Social Network"
                            description={["Typescript", "React", "Redux", "Redux thunk", "WebSocket", "React router dom", "RestAPI", "Jest", "Ant-Design"]}
                            style={sn}
                            linker="https://pavelkv94.github.io/Social-Network/"
                        />
                        <SingleProject
                            title="Meditation-App"
                            description={["Native JS", "Work with audio/video files", "Work with DOM",]}
                            style={meditation}
                            linker="https://pavelkv94.github.io/Meditation-App/"
                        />
                        <SingleProject
                            title="Calculator"
                            description={["Native JS", "Localstorage", "Work with DOM"]}
                            style={calc}
                            linker="https://pavelkv94.github.io/calculator"
                        />

                        <SingleProject
                            title="Momentum-App"
                            description={["Native JS", "Localstorage", "Work with DOM", "Work with Date object"]}
                            style={momentum}
                            linker="https://pavelkv94.github.io/Momentum/"
                        />
                        <SingleProject
                            title="Counter"
                            description={["Typescript", "React", "Redux", "LocalStorage"]}
                            style={counter}
                            linker="https://pavelkv94.github.io/Counter/"
                        />
                        <SingleProject
                            title="Login Example"
                            description={["Typescript", "React", "Redux", "Redux thunk", "RestAPI", "Axios"]}
                            style={login}
                            linker="https://Pavelkv94.github.io/Login-example"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    )
}