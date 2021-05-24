import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'
import { SingleProject } from './singleProject/SingleProject';
import { Title } from '../common/elements/Title/Title';


export function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title = "My projects"/>
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