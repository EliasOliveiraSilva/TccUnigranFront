import React, { useEffect, useState } from 'react'
import Container from '../layout/Container'
import styles from './PacientEdit.module.css'
import { useParams } from 'react-router-dom'
import PatientMedicineForm from './PatientMedicineForm'

function PatientMedicine() {
  const { id } = useParams()

  const [patientMedicine, setPatientMedicine] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3002/user/${id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPatientMedicine(data)
      })
      .catch((error) => console.log(error))
  }, [id])

  function editMedicine(medicine) {
    fetch(`http://localhost:3002/user/medicines/${id}`, {
      method: 'patch',
      headers: {
        'Content': 'application/json'
      },
      body: JSON.stringify(medicine)
    })
      .then((response) => response.json())
      .then((data) => {
        setPatientMedicine(data)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <div className={styles.pacient_details}>
        <Container customClass='column'>
          <div className={styles.pacient_details_container}>
            <div>
              <h1><span>Usuário: </span>{patientMedicine.name}</h1>
            </div>
            <div className={styles.edit_paciente_container}>
              <PatientMedicineForm placholderOption={'Selecione um medicamento'} patientId={id} btnText={'Cadastrar'} medicineData={patientMedicine} handleSubmit={editMedicine} />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default PatientMedicine