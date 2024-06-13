import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './PacientEdit.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import PacientForm from '../pacient/PacientForm'
import Message from '../layout/Message'

function PacientEdit() {
    const { id } = useParams()
    const [patient, setPatient] = useState([])
    const [togglePatientFormShow, setTogglePatientFormShow] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState()

    useEffect(() => {
        fetch(`http://localhost:3002/user/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setPatient(data)
                setTogglePatientFormShow(false)
            })
            .catch((error) => console.log(error))

    }, [id])

    function editPatient(patient) {
        setMessage('')
        fetch(`http://localhost:3002/user/${id}`, {
            method: 'patch',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patient)
        })
            .then((response) => response.json())
            .then((data) => {
                setPatient(data)
                setMessage('Usuário alterado com sucesso!')
                setType('success')
            })
            .catch((error) => console.log(error))
    }

    function togglePatientForm() {
        setTogglePatientFormShow(!togglePatientFormShow)
    }

    return (
        <>
            {patient.name  ? (
                <div className={styles.pacient_details}>
                    <Container customClass='column'>
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.pacient_details_container}>
                            <h1><span>Usuário: </span>{patient.name}</h1>
                            <button className={styles.btn} onClick={togglePatientForm}>{!togglePatientFormShow ? 'Editar Usuário' : 'Fechar'}</button>
                            {!togglePatientFormShow ? (
                                <div>
                                    <p><span>Usuário: </span> {patient.name}</p>
                                </div>
                            ) : (
                                <div className={styles.pacient_details_container}>
                                    <div className={styles.edit_paciente_container}>
                                        <PacientForm btnText={'Conclir Edição'} handleSubmit={editPatient} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (<Loading />)}
        </>
    )
}

export default PacientEdit