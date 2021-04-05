import React from 'react';
import s from './Contacts.module.css'
import styleContainer from '../common/styles/styleContainer.module.css'
import { Button } from '../common/elements/button/Button';


export function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contacts}>
                    <input type="text" placeholder="Name" className={s.input}/>
                    <input type="email" placeholder="email" className={s.input}/>
                    <textarea placeholder="Your messaage" className={s.textarea} />
                </form>
                <Button title="Send" />
            </div>
        </div>
    )
}