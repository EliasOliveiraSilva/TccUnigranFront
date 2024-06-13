import React, { useEffect, useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './PacientEdit.module.css'
import SelectMedicine from '../form/Select'

function PatientMedicineForm({ btnText, handleSubmit, placholderOption, patientId, medicineData }) {
    const [drugs, setDrugs] = useState([])
    console.log(drugs)
    const [medicine, setMedicine] = useState(medicineData || {})

    useEffect(() => {
        fetch('http://localhost:3002/medicine', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setDrugs(data)
            })
            .catch((error) => console.log(error))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(medicine)
    }

    function handleChange(e) {
        setMedicine({ ...medicine, patientId, [e.target.name]: e.target.value })
        console.log(medicine)
    }

    function handleMedicine(e) {
        setMedicine({...medicine, scheduling:{_id: e.target.value}, commercial_name: e.target.options[e.selectedIndex].text })
        // Error - Não o texto
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            
            <Input type={'hidden'} name={'patientId'} hadleOnChange={handleChange} value={patientId} />

            <SelectMedicine id={drugs._id} placholderOption={placholderOption} name={'commercial_name'} text={'Medicamento'} options={drugs} hadleOnChange={handleMedicine} value={drugs.commercial_name ? drugs.commercial_name : ''} />

            <Input type={'number'} name={'amount'} text={'Quantidade'} placholder={'Insira a quantidade'} hadleOnChange={handleChange} value={medicine.amount ? medicine.amount : ''} />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default PatientMedicineForm