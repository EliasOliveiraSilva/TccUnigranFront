import React from 'react'
import styles from './NewPacient.module.css'
import PacientForm from '../pacient/PacientForm'
import { useNavigate } from 'react-router-dom'

function NewPacient() {
  const navigate = useNavigate()

  // Cadastrar novo usuário
  function createPatient(patient) {
    fetch('http://localhost:3002/user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patient)
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        navigate('/pacient', { state: { message: 'Usuário cadastrado com sucesso!' } })
      })
      .catch((error) => console.log(error))
  }
  // 

  

  return (
    <div className={styles.newpaciente_container}>
      <h1>Cadastrar paciente</h1>
      <p>Cadastre seus pacientes e gerencie suas visitas e atendimentos</p>
      <PacientForm handleSubmit={createPatient} btnText={'Cadastrar Usuário'} options={'cadastro'} />
    </div>
  )
}

export default NewPacient