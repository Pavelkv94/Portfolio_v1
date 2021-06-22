import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { MySkill } from './mySkill/MySkill';
import { Title } from '../common/elements/Title/Title';
import { faCss3, faGithub, faHtml5, faJs, faNpm, faReact, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import { faFax, faRocket } from '@fortawesome/free-solid-svg-icons';


export function Skills() {
    return (
        <div className={s.skillsBlock} id="skills">
            <Fade bottom>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <Title title="My skills" />
                    <div className={s.skills}>
                        <MySkill
                            icon={faReact}
                            title="React"
                            description="React, redux, thunk, react router dom, websocket, RestAPI "
                        />
                        <MySkill
                            icon={faHtml5}
                            title="HTML"
                            description="HTML5, ESP6"
                        />
                        <MySkill
                            icon={faJs}
                            title="JavaScript"
                            description="Javascript, Typescript"
                        />
                        <MySkill
                            icon={faCss3}
                            title="Css3"
                            description="Css3, SASS, SCSS, bootstrap, flex, grid, Material UI"
                        />
                        <MySkill
                            icon={faNpm}
                            title="npm"
                            description="npm, storybook, axios, formik"
                        />
                        <MySkill
                            icon={faGithub}
                            title="Git"
                            description="GitHub"
                        />
                        <MySkill
                            icon={faRocket}
                            title="Other"
                            description="Refactoring, bug fixing, migrating to TypeScript, registration and login form creation.
                             Reusable components development, jest testing."
                        />
                    </div>
                </div>
            </Fade>
        </div>
    )
}