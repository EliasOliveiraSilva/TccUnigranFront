import React from 'react'
import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={styles.new_contact_container}>
      <h1>UBSF ANA MARIA DO COUTO</h1>
      <p>Endereço: <span>Rua mitsuo daima, 483</span></p>
      <p>Bairro: <span>Ana maria do couto</span></p>
      <p>CEP: <span>79103-120</span></p>
      <p>Telefone: <span>(67) 6733147031</span></p>
      <p>E-mail: <span>ubsfanamariadocouto@gmail.com</span></p>
      <p>Horário de Atendimento: </p>
      <p><span>Segunda - 07:00 às 19:00</span></p>
      <p><span>Terça - 07:00 às 19:00</span></p>
      <p><span>Quarta - 07:00 às 19:00</span></p>
      <p><span>Quinta - 07:00 às 19:00</span></p>
      <p><span>Sexta - 07:00 às 19:00</span></p>
    </div>
  )
}

export default Contact