import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import styles from './MedicineEdit.module.css'
import MedicinesForm from './MedicinesForm'
import axios from 'axios'
import Message from '../layout/Message'

function MedicineEdit() {

    const { id } = useParams()
    const [medicine, setMedicine] = useState([])
    const [showMedicineForm, setShowMedicineForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()


    useEffect(() => {
        fetch(`http://localhost:3002/medicine/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setMedicine(data)
                // console.log(data)
            })
            .catch((error) => console.log(error))
    }, [id])

    function editMedicine(medicine) {
        setMessage('')
        axios.patch(`http://localhost:3002/medicine/${id}`, medicine, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // setMedicine(response.data);
                setShowMedicineForm(false);
                setMessage('Medicamento alterado com suceso!')
                setType('success')
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function toogleMedicineForm() {
        setShowMedicineForm(!showMedicineForm)
    }

    return (
        <>
            {medicine.commercial_name ? (
                <div className={styles.medicine_details}>
                    <Container customClass='column'>
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.medicine_details_container}>
                            <h1><span>Medicamento: </span>{medicine.commercial_name}</h1>
                            <button className={styles.btn} onClick={toogleMedicineForm} >{!showMedicineForm ? 'Editar Medicamento' : 'Fechar'}</button>
                            {!showMedicineForm ? (
                                <div>
                                    <p><span>Medicamento: </span>{medicine.commercial_name}</p>
                                </div>
                            ) : (
                                <div className={styles.medicine_details_container}>
                                    <div className={styles.edit_medicine_container}>
                                        <MedicinesForm btnText={'Concluir Edição'} handleSubmit={editMedicine} medicineData={medicine} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : <Loading />}
        </>
    )
}

export default MedicineEdit