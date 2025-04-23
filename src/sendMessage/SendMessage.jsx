import React, { useEffect, useState, useRef } from "react";
import styles from './SendMessage.module.css';
import emailjs from 'emailjs-com';

export default function SendMessage() {
  const form = useRef();

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
        <label>Nombre</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
      </div>
      <label>Mensaje</label>
      <textarea className={styles.messageBox} name="message" required />
      <input  type="submit" value="Enviar" />
    </form>
  );
}