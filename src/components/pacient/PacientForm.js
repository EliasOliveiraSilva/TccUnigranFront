import React, { useState } from 'react'
import styles from './PacientForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function PacientForm({ btnText, handleSubmit, patientData }) {

    const [patient, setPatient] = useState(patientData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(patient)
    }

    function handleChange(e) {
        setPatient({ ...patient, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type={'text'} name={'name'} text={'Nome do paciente'} placholder={'Insira o nome do paciente'} hadleOnChange={handleChange} value={patient.name ? patient.name : ''} />

            <Input type={'date'} name={'age'} text={'Data de nascimento'} placholder={'Insira a data de nascimento'} hadleOnChange={handleChange} value={patient.age ? patient.age : ''} />

            <Input type={'text'} name={'cpf'} text={'CPF'} placholder={'Insira o CPF'} hadleOnChange={handleChange} value={patient.cpf ? patient.cpf : ''} />

            <Input type={'text'} name={'cns'} text={'CNS'} placholder={'Insira o número do Cartão Nacional de Saúde'} hadleOnChange={handleChange} value={patient.cns ? patient.cns : ''} />

            <Input type={'text'} name={'telephone'} text={'Telefone'} placholder={'Insira o número de telefone'} hadleOnChange={handleChange} value={patient.telephone ? patient.telephone : ''} />

            <Input type={'text'} name={'address'} text={'Endereço: (Rua/nº)'} placholder={'Insira o nome da rua e número'} hadleOnChange={handleChange} value={patient.address ? patient.address : ''} />
            
            <SubmitButton text={btnText} />
        </form>
    )
}

export default PacientForm