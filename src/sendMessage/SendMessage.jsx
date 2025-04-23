import React, { useState, useRef } from "react";
import styles from './SendMessage.module.css';
import emailjs from 'emailjs-com';

export default function SendMessage() {
  const form = useRef();
  const [isSelected, setIsSelected] = useState(false);
  const [message, setMessage] = useState ('');

  const handleClick = e => {
    setIsSelected(true);
  }

  const handleBlur = e => {
    if (message.trim() === '') {
      setIsSelected(false)
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
          alert("Mensaje enviado!");
      }, (error) => {
          console.log(error.text);
          alert("Error al enviar.");
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
          onClick={handleClick}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={isSelected ? '' : 'Your Entire Name'}
        />
        <input 
          type="email" 
          name="user_email" 
          required 
          id="user_email"
          onClick={handleClick}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={isSelected ? '' : 'Your Email'}
        />
      </div>
      <div className={styles.textareaSide}>
        <textarea 
          className={styles.messageBox} 
          name="message" 
          required 
          id='message' 
          onClick={handleClick}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={isSelected ? '' : 'Write your message in here...'}
        ></textarea>
      <button  type="submit" value="Enviar">Submit</button>
      </div>
    </form>
  );
}