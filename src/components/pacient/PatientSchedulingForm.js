import React, { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './PacientEdit.module.css'

function PatientSchedulingForm({ btnText, handleSubmit, patientId, schedulingData }) {
    const [scheduling, setScheduling] = useState(schedulingData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(scheduling)
    }

    function handleChange(e) {
        setScheduling({ ...scheduling, patientId, [e.target.name]: e.target.value })
        // console.log(scheduling)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type={'hidden'} name={'patientId'} hadleOnChange={handleChange} value={patientId} />
            <Input type={'text'} name={'title'} text={'Título'} placholder={'Insira o título do agendamento'} hadleOnChange={handleChange} value={scheduling.title ? scheduling.title : ''} />
            <Input type={'text'} name={'description'} text={'Descrição'} placholder={'Insira a descrição agendamento'} hadleOnChange={handleChange} value={scheduling.description ? scheduling.description : ''} />
            <Input type={'date'} name={'date'} text={'Data'} placholder={'Insira a data agendamento'} hadleOnChange={handleChange} value={scheduling.date ? scheduling.date : ''} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default PatientSchedulingForm