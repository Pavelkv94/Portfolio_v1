import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'
import { SingleProject } from './singleProject/SingleProject';


export function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    <SingleProject
                        title="The single greatest gift to get your friend who always travels"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..." />
                    <SingleProject
                        title="The single greatest gift to get your friend who always travels"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..." />
                </div>
            </div>
        </div>
    )
}