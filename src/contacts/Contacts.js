import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { Button } from '../common/elements/button/Button';
import { Title } from '../common/elements/Title/Title';
import Fade from 'react-reveal/Fade';

export function Contacts() {
    return (
        <div className={s.contactsBlock} id="contacts">
            <Fade bottom>
                <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <Title title="Contacts" />
                    <form className={s.contacts}>
                        <input type="text" placeholder="Name" className={s.input} />
                        <input type="email" placeholder="email" className={s.input} />
                        <textarea placeholder="Your messaage" className={s.textarea} />
                    </form>
                    <Button title="Send" type={"submit"} linker="#" />
                </div>
            </Fade>
        </div>
    )
}