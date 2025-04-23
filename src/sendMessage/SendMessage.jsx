import React, { useState, useRef } from "react";
import styles from './SendMessage.module.css';
import emailjs from 'emailjs-com';

export default function SendMessage() {
  const form = useRef();
  const [nameSelected, setNameSelected] = useState(false);
  const [emailSelected, setEmailSelected] = useState(false);
  const [messageSelected, setMessageSelected] = useState(false);

  const [message, setMessage] = useState ('');

  

  const handleBlur = (field, value) => {
    if (value.trim() === '') {
      if ( field === 'name') setNameSelected(false);
      if ( field === 'email') setEmailSelected(false);
      if ( field === 'message') setMessageSelected(false);
    }
  }

  const handleChange = e => {
    setMessage(e.target.value);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pnxkykg', 'template_vy3mpvp', form.current, 'r4TEpT3Dc2MN6FSRO')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!");
          setNameSelected(false);
          setEmailSelected(false);
          setMessageSelected(false);
          setMessage('');
      }, (error) => {
          console.log(error.text);
          alert("Error sending.");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.entireForm}>
      <div className={styles.infoForm}>
        <input 
          type="text" 
          name="user_name" 
          required 
          id="user_name"
          onClick={() => setNameSelected(true)}
          onChange={handleChange}
          onBlur={(e) => handleBlur('name', e.target.value)}
          placeholder={nameSelected ? '' : 'Your Entire Name'}
        />
        <input 
          type="email" 
          name="user_email" 
          required 
          id="user_email"
          onClick={() => setEmailSelected(true)}
          onChange={handleChange}
          onBlur={(e) => handleBlur('email', e.target.value)}
          placeholder={emailSelected ? '' : 'Your Email'}
        />
      </div>
      <div className={styles.textareaSide}>
        <textarea 
          className={styles.messageBox} 
          name="message" 
          required 
          id='message' 
          onClick={() => setMessageSelected(true)}
          onBlur={(e) => handleBlur('message', e.target.value)}
          onChange={handleChange}
          placeholder={messageSelected ? '' : 'Write your message in here...'}
        ></textarea>
      <button  type="submit" value="Enviar">Send Message</button>
      </div>
    </form>
  );
}