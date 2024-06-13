import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './PacientEdit.module.css'
import Container from '../layout/Container'
import PatientSchedulingForm from './PatientSchedulingForm'

function PatientScheduling() {
    const { id } = useParams()
    const [patientScheduling, setPatientScheduling] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3002/user/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPatientScheduling(data)
            })
            .catch((error) => console.log(error))
    }, [id])

    function editScheduling(scheduling) {
        fetch(`http://localhost:3002/user/scheduling/${id}`, {
            method: 'patch',
            headers: {
                'Content': 'application/json'
            },
            body: JSON.stringify(scheduling)
        })
            .then((response) => response.json())
            .then((data) => {
                setPatientScheduling(data)
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className={styles.pacient_details}>
                <Container customClass='column'>
                    <div className={styles.pacient_details_container}>
                        <div>
                            <h1><span>Usuário: </span>{patientScheduling.name}</h1>
                        </div>
                        <div className={styles.edit_paciente_container}>
                            <PatientSchedulingForm patientId={id} btnText={'Cadastrar'} handleSubmit={editScheduling} medicineData={patientScheduling} />
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default PatientScheduling