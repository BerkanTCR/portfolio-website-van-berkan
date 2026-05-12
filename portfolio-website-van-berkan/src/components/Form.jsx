import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nxykzvr', 'template_ofpdbmd', form.current, {
                publicKey: 'mN2MxfojyE4TMlH4Z',
            })
            .then(
                () => {
                    console.log('SUCCES!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <>

            <div className="form-container">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <label>Naam:</label>
                    <input type="text" name="name" placeholder="Naam..." />

                    <label>Subject:</label>
                    <input type="text" name="title" placeholder="Subject..." />

                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Email..." />

                    <label className="bericht">Bericht:</label>
                    <textarea name="message" placeholder="Typ hier een bericht..." />

                    <button type="submit">Verzend</button>
                </form>
            </div>

        </>
    );
};
export default Form;