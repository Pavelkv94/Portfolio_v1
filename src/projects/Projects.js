import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { SingleProject } from './singleProject/SingleProject';
import { Title } from '../common/elements/Title/Title';
import calcImage from './../assets/images/calc.jpg'
import meditationImage from './../assets/images/meditation.jpg'
import momentumImage from './../assets/images/displayApp.jpg'
import todolistImage from './../assets/images/todolist.jpg'

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
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title="My projects" />
                <div className={s.projects}>
                    <SingleProject
                        title="Calculator"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                        style={calc}
                        linker="https://pavelkv94.github.io/calculator"
                    />
                    <SingleProject
                        title="Meditation-App"
                        description="Lorem asdasddas asd ads adsipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                        style={meditation}
                        linker="https://pavelkv94.github.io/Meditation-App/"
                    />
                    <SingleProject
                        title="Momentum-App"
                        description="Lorem asdasddas asd ads adsipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                        style={momentum}
                        linker="https://pavelkv94.github.io/Momentum/"
                    />
                    <SingleProject
                        title="Todolist"
                        description="Lorem asdasddas asd ads adsipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                        style={todolist}
                        linker="https://pavelkv94.github.io/Todolist/"
                    />
                </div>
            </div>
        </div>
    )
}