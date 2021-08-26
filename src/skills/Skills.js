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
                            description={["React", "Redux", "Redux Thunk", "React router dom", "Websocket", "RestAPI", "Redux Toolkit"]}
                        />
                        <MySkill
                            icon={faHtml5}
                            title="HTML"
                            description={["HTML5", "ES6"]}
                        />
                        <MySkill
                            icon={faJs}
                            title="JavaScript / Typescript"
                            description={["Javascript", "Typescript"]}
                        />
                        <MySkill
                            icon={faCss3}
                            title="Css3"
                            description={["Css3", "SASS", "SCSS", "Bootstrap", "Flex", "Grid", "Material UI", "Ant-Design"]}
                        />
                        <MySkill
                            icon={faNpm}
                            title="npm"
                            description={["npm", "yarn", "Storybook", "Axios", "Formik"]}
                        />
                        <MySkill
                            icon={faGithub}
                            title="Git"
                            description={["GitHub"]}
                        />
                        <MySkill
                            icon={faRocket}
                            title="Other"
                            description={["Postman", "Refactoring", "Bug fixing", "Migrating to TypeScript", "Registration and Login form creation",
                                "Reusable components development", "Jest. Unit testing", "CodeWars"]}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    )
}