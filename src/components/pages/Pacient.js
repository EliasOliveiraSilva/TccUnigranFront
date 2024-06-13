import React, { useEffect, useState } from 'react'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import styles from './Pacient.module.css'
import PacientCard from '../pacient/PacientCard'
import Loading from '../layout/Loading'

function Pacient() {

  const [patients, setPatients] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [pacientMessage, setPacientMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:3002/user', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setPatients(data)
        setRemoveLoading(true)
      })
      .catch((error) => console.log(error))

  }, [])

  function removePacient(id) {
    fetch(`http://localhost:3002/user/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(() => {
        setPatients(patients.filter((patient) => patient._id !== id))
        setPacientMessage('Usuário removido com sucesso!')
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className={styles.pacient_container}>
      <div className={styles.title_container}>
        <h2>Usuários</h2>
        <LinkButton to={'/new-pacient'} text={'Cadastrar usuário'} />
      </div>
      {message && <Message msg={message} type={'success'} />}
      {pacientMessage && <Message msg={pacientMessage} type={'success'} />}
      <Container customClass='column'>
        {patients.length > 0 && patients.map((patient) => (
          <PacientCard id={patient._id} key={patient._id} name={patient.name} level={patient.level} scheduling={patient.scheduling.length} drugs={patient.medicines.length} handleRemove={removePacient} />
        ))}
        {!removeLoading && <Loading />}
        {removeLoading && patients.length === 0 && (
          <p className={styles.alertMessage}>Não há usuários cadastrados</p>
        )}
      </Container>
    </div>
  )
}

export default Pacient