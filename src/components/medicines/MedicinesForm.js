import React, { useState } from 'react'
import Input from '../../components/form/Input'
import SubmitButton from '../../components/form/SubmitButton'
import styles from './MedicinesForm.module.css'

function MedicinesForm({ btnText, handleSubmit, medicineData }) {
    const [medicine, setMedicine] = useState(medicineData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(medicine)
    }

    function handleChange(e) {
        setMedicine({ ...medicine, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type={'text'} name={'commercial_name'} text={'Nome comercial'} placholder={'Insira o nome comercial do medicamento'} hadleOnChange={handleChange} value={medicine.commercial_name ? medicine.commercial_name : ''} />
            <Input type={'text'} name={'generic_name'} text={'Nome genérico'} placholder={'Insira o nome genérico do medicamento'} hadleOnChange={handleChange} value={medicine.generic_name ? medicine.generic_name : ''} />
            <Input type={'number'} name={'amount'} text={'Quantidade (un)'} placholder={'Insira a quantidade do medicamento'} hadleOnChange={handleChange} value={medicine.amount ? medicine.amount : ''} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default MedicinesForm