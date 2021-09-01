import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { Button } from '../common/elements/button/Button';
import { Title } from '../common/elements/Title/Title';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

export function Contacts() {
    const submitCallback = (e) => {
        e.preventDefault();
        //console.log(e.target[0].value)
        axios.post("https://smtp-nodejs-serverr.herokuapp.com/send", { name: e.target[0].value, email: e.target[1].value, message: e.target[2].value })
            .then(() => { alert('Your message has been sent') })
    }

    return (
        <div className={s.contactsBlock} id="contacts" >
            <Fade bottom>
                <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <Title title="Contacts" />
                    <form className={s.contacts} onSubmit={submitCallback}>
                        <input type="text" placeholder="Name" name="name" className={s.input} />
                        <input type="email" placeholder="email" name="email" className={s.input} />
                        <textarea placeholder="Your messaage" name="message" className={s.textarea} />
                        <button >Send</button>
                        {/* <Button title="Send" type={"submit"} linker="#" onSubmit={(e) => { alert('Submit') }} /> */}
                    </form>

                </div>
            </Fade>
        </div>
    )
}