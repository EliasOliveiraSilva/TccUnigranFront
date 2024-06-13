import React from 'react'
import styles from './NewMedicines.module.css'
import MedicinesForm from '../medicines/MedicinesForm'
import { useNavigate } from 'react-router-dom'

function NewMedicines() {
    const navigate = useNavigate();

    function createMedicines(medicine) {
        fetch('http://localhost:3002/medicine', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        })
            .then((response) => response.json())
            .then((data) => {
                navigate('/medicines', { state: { message: 'Medicamento cadastrado com sucesso!' } })
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className={styles.new_medicines_container}>
            <h1>Cadastrar Medicamentos</h1>
            <p>Cadastro de medicamentos para distribuição e gerenciamento</p>
            <MedicinesForm handleSubmit={createMedicines} btnText={'Cadastrar Medicamento'} />
        </div>
    )
}

export default NewMedicines