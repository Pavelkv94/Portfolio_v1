import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'
import { SingleProject } from './singleProject/SingleProject';
import { Title } from '../common/elements/Title/Title';
import calcImage from './../assets/images/calc.jpg'
import meditationImage from './../assets/images/meditation.jpg'

export function Projects() {
    const calc = {
        backgroundImage: `url(${calcImage})`,
    };
    const meditation = {
        backgroundImage: `url(${meditationImage})`,
    }
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title="My projects" />
                <div className={s.projects}>
                    <SingleProject
                        title="Calculator"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                        style={calc}
                    />
                    <SingleProject
                        title="Meditation-App"
                        description="Lorem asdasddas asd ads adsipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                        style={meditation}
                    />
                </div>
            </div>
        </div>
    )
}