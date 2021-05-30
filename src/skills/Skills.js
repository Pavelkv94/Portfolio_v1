import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { MySkill } from './mySkill/MySkill';
import { Title } from '../common/elements/Title/Title';
import { faCss3, faGithub, faHtml5, faJs, faReact, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title="My skills" />
                <div className={s.skills}>
                    <MySkill
                        icon={faReact}
                        title="React"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                    />
                    <MySkill
                        icon={faHtml5}
                        title="HTML"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                    />
                    <MySkill
                        icon={faJs}
                        title="JavaScript"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                    />
                    <MySkill
                        icon={faCss3}
                        title="Css3"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                    />
                    <MySkill
                        icon={faStackOverflow}
                        title="StackOverflow"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                    />
                    <MySkill
                        icon={faGithub}
                        title="Git"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                    />
                     <MySkill
                        icon={faGithub}
                        title="Git"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
                    />
                </div>
            </div>
        </div>
    )
}